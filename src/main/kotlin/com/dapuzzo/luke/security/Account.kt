package com.dapuzzo.luke.security

data class Account(val username: String, val token: String, val role: Role = Role.USER)

enum class Role {
    ADMIN, USER
}