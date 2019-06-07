package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.Cleanup
import com.dapuzzo.luke.core.DatabaseBase
import com.dapuzzo.luke.core.execute
import com.dapuzzo.luke.core.random.randomCredentials
import com.dapuzzo.luke.core.random.randomString
import com.dapuzzo.luke.security.SecurityRepository.Companion.DUPLICATE_USER_MESSAGE
import com.dapuzzo.luke.security.SecurityRepository.Companion.UNAUTHORIZED_MESSAGE
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import kotlin.test.fail

@Cleanup
class SecurityRepositoryImplTest : DatabaseBase() {
    @Autowired
    lateinit var subject: SecurityRepository

    @Autowired
    lateinit var encoder: PasswordEncoder

    @Test
    fun shouldSaveAUsernameAndPasswordAndValidateThatItMatchesARecord() {
        val credentials: Credentials = randomCredentials()
        subject.createAccount(credentials)

        subject.login(credentials)
            .execute(
                { account -> assertThat(account.username).isEqualTo(credentials.username) },
                { error -> Assertions.fail(error.message) }
            )
    }

    @Test
    fun shouldReturnAdminStatusIfAccountHasBeenUpgraded() {
        val credentials: Credentials = randomCredentials()

        subject.createAccount(credentials)

        jdbcTemplate.execute("UPDATE account \nSET role='ADMIN'  \nWHERE username = '${credentials.username}'")

        subject.login(credentials)
            .execute(
                { account -> assertThat(account.role).isEqualTo(Role.ADMIN) },
                { error -> Assertions.fail(error.message) }
            )
    }

    @Test
    fun shouldNotValidateARecordThatHasNotBeenSaved() {
        subject.login(randomCredentials())
            .execute(
                { Assertions.fail("It should have errored") },
                { errorMessage -> assertThat(errorMessage.message).isEqualTo(UNAUTHORIZED_MESSAGE) }
            )
    }

    @Test
    fun shouldNotAllowTwo() {

        val credentials: Credentials = randomCredentials(username = randomString())
        val secondAccount = randomCredentials(username = credentials.username)

        subject.createAccount(credentials)
        subject.createAccount(secondAccount).execute(
            { fail() },
            { errorMessage -> assertThat(errorMessage.message).isEqualTo(DUPLICATE_USER_MESSAGE) }
        )
    }

    @Test
    fun shouldSaveHashedPasswordToRepoForLogin() {
        val credentials: Credentials = randomCredentials(username = randomString())

        subject.createAccount(credentials).execute(
            {},
            { fail() }
        )

        val savedAccount = jdbcTemplate.queryForObject(
            "SELECT * FROM account\nWHERE username='${credentials.username}'"
        ) { resultSet, _ ->
            Credentials(username = resultSet.getString("username"), password = resultSet.getString("password"))
        }!!

        assertThat(savedAccount.password).isNotEqualToIgnoringCase(credentials.password)
        assertThat(encoder.matches(credentials.password, savedAccount.password)).isTrue()
    }

    @Test
    fun shouldOnlyLoginWithValidPassword(){
        val credentials: Credentials = randomCredentials(username = randomString())

        subject.createAccount(credentials)

        subject.login(Credentials(username = credentials.username, password = "BADD PASWORD")).execute(
            {fail()},
            {}
        )

        subject.login(credentials).execute(
            {},
            {fail()}
        )
    }


}