package com.dapuzzo.luke.core

import org.springframework.http.HttpStatus

open class LukeException(message: String) : Throwable(message = message) {
    open fun getErrorCode(): HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
}