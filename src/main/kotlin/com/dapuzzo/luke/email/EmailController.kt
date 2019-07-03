package com.dapuzzo.luke.email

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@RestController("/email")
class EmailController(val emailService: EmailService) {

    data class EmailRequest(val name: String, val email: String, val message: String)

    @PostMapping
    fun sendEmail(@RequestBody emailRequest: EmailRequest) {
        val email = Email(name = emailRequest.name, email = emailRequest.email, message = emailRequest.message)
        emailService.send(email)
    }
}