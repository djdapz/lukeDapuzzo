package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.LukeException
import com.dapuzzo.luke.core.Result
import com.dapuzzo.luke.core.mapSuccess
import org.springframework.stereotype.Service

@Service
class SecurityServiceImpl(
    private val securityRepository: SecurityRepositoryImpl,
    private val jwtIssuer: JwtIssuer
) : SecurityService {
    override fun createAccount(credentials: Credentials): Result<Account, LukeException> {
        return securityRepository
            .createAccount(credentials)
    }

    override fun login(credentials: Credentials): Result<AuthorizedAccount, LukeException> =
        securityRepository.login(credentials).mapSuccess {
            val token = jwtIssuer.getToken(it.username)
            AuthorizedAccount(it.username, token)
        }
}
