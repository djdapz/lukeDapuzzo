package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.LukeException
import com.dapuzzo.luke.core.Result

interface SecurityService {
    fun login(credentials: Credentials): Result<AuthorizedAccount, LukeException>
    fun createAccount(credentials: Credentials): Result<Account, LukeException>
}