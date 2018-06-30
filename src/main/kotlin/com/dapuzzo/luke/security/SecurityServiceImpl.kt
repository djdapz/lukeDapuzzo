package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.LukeException
import com.dapuzzo.luke.core.Result
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class SecurityServiceImpl(private val securityRepository: SecurityRepositoryImpl, val encoder: PasswordEncoder) : SecurityService {
    override fun createAccount(credentials: Credentials): Result<Account, LukeException> {
        return securityRepository
                .createAccount(credentials)
    }

    override fun login(credentials: Credentials): Result<Account, LukeException> =
            securityRepository.login(credentials)
}
