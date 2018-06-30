package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.LukeException
import com.dapuzzo.luke.core.Result

interface SecurityRepository{
    fun createAccount(credentials: Credentials): Result<Account, LukeException>
    fun login(credentials: Credentials): Result<Account, LukeException>
    companion object {
        val UNAUTHORIZED_MESSAGE = "USER IS NOT AUTHORIZED"
        val DUPLICATE_USER_MESSAGE= "A USER ALREADY EXISTS WITH THAT USERNAME"
    }
}