package com.dapuzzo.luke.security

interface JwtIssuer {
    fun getToken(user: String): String
}
