package com.devon.dapuzzo.email

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Component

import java.util.ArrayList

/**
 * Created by devondapuzzo on 8/25/17.
 */

@Component
class EmailService {
    var distributionList: ArrayList<String>

    init {
        distributionList = ArrayList<String>()
        distributionList.add("doug@dapuzzo.com")
        distributionList.add("june@dapuzzo.com")
        distributionList.add("devon.dapuzzo@gmail.com")
        distributionList.add("lpdapz@aol.com")
    }


    @Autowired
    var emailSender: JavaMailSender? = null

    fun sendMessage(to: String, subject: String, text: String) {
        val message = SimpleMailMessage()
        message.setTo(to)
        message.subject = subject
        message.text = text
        emailSender!!.send(message)
    }

    fun sendEmail(emailRequest: EmailRequest) {
        val email = StringBuilder()

        email.append("FROM: ").append(emailRequest.name).append('\n').append('\n')
                .append("EMAIL: ").append(emailRequest.email).append('\n').append('\n')
                .append(emailRequest.message).append('\n').append('\n')

        for (destination in distributionList) {
            sendMessage(destination, "LUKE D'APUZZO Website Contact", email.toString())
        }
    }
}
