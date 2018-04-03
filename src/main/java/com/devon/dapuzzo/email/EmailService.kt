package com.devon.dapuzzo.email

import org.springframework.beans.factory.annotation.Value
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Component

/**
 * Created by devondapuzzo on 8/25/17.
 */

@Component
class EmailService(val emailSender: JavaMailSender,
                   @Value("\${dapuzzo.luke.email-distribution-list}")
                   val emailAddresses: Array<String>
) {
    fun sendEmail(emailRequest: EmailRequest) =
            emailSender.send(
                    SimpleMailMessage().apply {
                        to= emailAddresses
                        subject = "LUKE D'APUZZO Website Contact"
                        text = emailRequest.formattedMessage
                    })
}
