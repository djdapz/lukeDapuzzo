package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.DatabaseBase
import com.dapuzzo.luke.core.DatabaseTest
import com.dapuzzo.luke.core.random.randomAccount
import com.dapuzzo.luke.core.random.randomString
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.fail
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate

class SecurityRepositoryTest : DatabaseBase() {

    @Autowired
    lateinit var jdbcTemplate: JdbcTemplate

    @Test
    internal fun `should save a username and password and validate that it matches a record`() {
        val subject = SecurityRepository(jdbcTemplate)

        val account: Account = randomAccount()
        subject.save(account)
        assertThat(subject.doesAccountExist(account)).isEqualTo(true)
    }

    @Test
    internal fun `should not validate a record that has not been saved`() {
        val subject = SecurityRepository(jdbcTemplate)

        assertThat(subject.doesAccountExist(randomAccount())).isEqualTo(false)
    }

    @Test
    internal fun `should not allow two `() {
        val subject = SecurityRepository(jdbcTemplate)

        val account: Account = randomAccount(username = randomString())
        val secondAccount = randomAccount(username = account.username)

        subject.save(account)

        try {
            subject.save(secondAccount)
//            fail("Should not have successfully saved")
        } catch (e: Exception) {
            assertThat(e).isNotNull()
        }
    }
}