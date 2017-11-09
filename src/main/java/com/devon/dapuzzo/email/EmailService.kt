package com.devon.dapuzzo.email

import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Component

/**
 * Created by devondapuzzo on 8/25/17.
 */

@Component
class EmailService(val emailSender: JavaMailSender) {
    val distributionList: List<String> = listOf("doug@dapuzzo.com", "june@dapuzzo.com", "devon.dapuzzo@gmail.com", "lpdapz@aol.com")

    fun sendMessage(to: String, subject: String, text: String) {
        val message = SimpleMailMessage()
        message.setTo(to)
        message.subject = subject
        message.text = text
        emailSender.send(message)
    }

    //TODO - consider adding a queueing mechanism
    fun sendEmail(emailRequest: EmailRequest) =
            distributionList
                    .map { sendMessage(it, "LUKE D'APUZZO Website Contact", emailRequest.formattedMessage) }
}
