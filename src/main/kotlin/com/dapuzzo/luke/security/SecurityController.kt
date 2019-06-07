package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.getAndMap
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class SecurityController(val securityService: SecurityService) {

    @PostMapping("/login")
    fun login(@RequestBody credentials: Credentials): ResponseEntity<AuthorizedAccount> = securityService
        .login(credentials)
        .getAndMap(
            { ResponseEntity(it, HttpStatus.OK) },
            { ResponseEntity(HttpStatus.UNAUTHORIZED) }
        )

    @PostMapping("/account/create")
    fun createAccount(@RequestBody credentials: Credentials) = securityService
        .createAccount(credentials)
        .getAndMap(
            { ResponseEntity(it, HttpStatus.OK) },
            { ResponseEntity(it.message, it.getErrorCode()) }
        )

}
