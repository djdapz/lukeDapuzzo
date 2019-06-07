package com.dapuzzo.luke.security

data class Account(val username: String, val role: Role = Role.USER)
data class AuthorizedAccount(val username: String, val token: String)

enum class Role {
    ADMIN, USER
}