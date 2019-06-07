package com.dapuzzo.luke.security

interface JwtValidator {
    fun isValid(jwt: String): Boolean
}
