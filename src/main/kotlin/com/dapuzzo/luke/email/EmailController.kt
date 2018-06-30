package com.dapuzzo.luke.email

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class EmailController(
        val emailService: EmailService) {


    @PostMapping("/api/email")
    fun sendEmail(@RequestBody emailRequest: EmailRequest): ResponseEntity<*> {
        if (!emailRequest.isValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(emailRequest.errorMessage)
        }

        emailService.sendEmail(emailRequest)

        return ResponseEntity.ok("Great Success")
    }
}
