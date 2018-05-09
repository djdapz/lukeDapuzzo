package com.dapuzzo.luke.security

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
class UserUnauthorized(val value: String = "User is not authorized") : Throwable(value)
