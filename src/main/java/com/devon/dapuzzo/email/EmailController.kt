package com.devon.dapuzzo.email

import lombok.AllArgsConstructor
import lombok.Value
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@Value
@AllArgsConstructor
class EmailController {
    val emailService: EmailService? = null

    @GetMapping("/api/email")
    fun sendEmail(@RequestBody emailRequest: EmailRequest): ResponseEntity<*> {
        if (!emailRequest.isValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(emailRequest.errorMessage)
        }

        emailService!!.sendEmail(emailRequest)

        return ResponseEntity.ok("Great Success")
    }
}
