package com.dapuzzo.luke.email

import com.dapuzzo.luke.config.EMAIL_DIST_LIST
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpEntity
import org.springframework.http.HttpMethod
import org.springframework.stereotype.Component
import org.springframework.web.client.RestTemplate


@Component
class EmailClient(
    val restTemplate: RestTemplate,
    @Value("\${dapuzzo.luke.email-service}") val emailServiceUrl: String,
    @Qualifier(EMAIL_DIST_LIST) val recipients: List<String>

) :
    EmailService {
    override fun send(email: Email) {
        restTemplate.exchange("$emailServiceUrl/email", HttpMethod.POST, HttpEntity(email.toServiceRequest()), String::class.java)
    }


    private fun Email.toServiceRequest() = EmailServiceRequest(
        from = this.email,
        to = recipients,
        message = this.message,
        name = this.name
    )

    data class EmailServiceRequest(
        val from: String,
        val message: String,
        val to: List<String>,
        val name: String
    )


}