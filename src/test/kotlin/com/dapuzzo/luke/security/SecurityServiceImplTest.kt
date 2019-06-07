package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.DuplicateKeyException
import com.dapuzzo.luke.core.Failure
import com.dapuzzo.luke.core.Success
import com.dapuzzo.luke.core.execute
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomAccount
import com.dapuzzo.luke.core.random.randomCredentials
import com.dapuzzo.luke.security.SecurityRepository.Companion.DUPLICATE_USER_MESSAGE
import com.dapuzzo.luke.security.SecurityRepository.Companion.UNAUTHORIZED_MESSAGE
import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.doReturn
import com.nhaarman.mockitokotlin2.mock
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.mockito.ArgumentMatchers.anyString
import org.mockito.Mockito
import org.springframework.http.HttpStatus
import kotlin.test.fail

open class SecurityServiceImplTest {

    private val goodCredentials = randomCredentials(password = faker().gameOfThrones().house())
    private val badCredentials = randomCredentials(password = faker().gameOfThrones().character())

    private val account: Account = randomAccount()
    private val authorizedAccount: AuthorizedAccount = AuthorizedAccount(
        username = account.username,
        token = "SUPER_AWESOME_TOKEN"
    )

    private val securityRepository: SecurityRepositoryImpl = mock {
        on { login(any()) } doReturn Success(account)
        on { createAccount(any()) } doReturn Success(account)
    }

    private val jwtIssuer: JwtIssuer = mock {
        on { getToken(anyString()) } doReturn "SUPER_AWESOME_TOKEN"
    }

    var subject = SecurityServiceImpl(securityRepository, jwtIssuer)

    @Test
    internal fun `should authenticate user if the username and password exist`() {
        subject.login(goodCredentials)
            .execute(
                { assertThat(it).isEqualTo(authorizedAccount) },
                { fail() }
            )
    }

    @Test
    internal fun `should return a failure user if the username and password dont exist`() {
        Mockito.`when`(securityRepository.login(any())).thenReturn(Failure(DuplicateKeyException(UNAUTHORIZED_MESSAGE)))
        subject.login(badCredentials)
            .execute(
                { fail() },
                { assertThat(it).hasMessage(UNAUTHORIZED_MESSAGE) }
            )
    }

    @Test
    fun shouldReturnAccountWhenSuccessfullyCreatedOne() {
        subject.createAccount(goodCredentials)
            .execute(
                { assertThat(it).isEqualTo(account) },
                { fail() }
            )
    }

    @Test
    fun shouldReturnDuplicateKeyExceptionWhenAccountAlreadyExists() {
        Mockito.`when`(securityRepository.createAccount(any()))
            .thenReturn(Failure(DuplicateKeyException(DUPLICATE_USER_MESSAGE)))
        subject.createAccount(badCredentials)
            .execute(
                { fail() },
                {
                    assertThat(it).hasMessage(DUPLICATE_USER_MESSAGE)
                    assertThat(it.getErrorCode()).isEqualTo(HttpStatus.CONFLICT)
                }
            )
    }
}