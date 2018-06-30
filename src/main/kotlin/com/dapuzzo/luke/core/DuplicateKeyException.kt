package com.dapuzzo.luke.core

import org.springframework.http.HttpStatus

class DuplicateKeyException(message: String) : LukeException(message) {
    override fun getErrorCode() = HttpStatus.CONFLICT
}