package com.dapuzzo.luke.email

import com.nhaarman.mockitokotlin2.*
import org.junit.Before
import org.junit.Test
import org.springframework.http.HttpEntity
import org.springframework.http.HttpMethod
import org.springframework.http.ResponseEntity
import org.springframework.web.client.RestTemplate

class EmailClientTest {

    private val url = "http://localhost:8089";
    private val recipients = listOf("bob@bob.bob", "joe@joe.joe")
    private val restTemplate = mock<RestTemplate>()
    private val subject = EmailClient(restTemplate, url, recipients)

    @Before
    fun setUp() {
        whenever(restTemplate.exchange(eq(url), any(), any(), any<Class<String>>()))
            .doReturn(
                ResponseEntity.ok("Great Success")
            )
    }

    @Test
    fun shouldCallEmailService() {
        val email = Email(name = "Joe", message = "yay stuff", email = "mail@mail.mail")

        subject.send(email)

        val httpEntity = HttpEntity(EmailClient.EmailServiceRequest("mail@mail.mail", "yay stuff", recipients, "Joe"))
        verify(restTemplate).exchange("$url/email" , HttpMethod.POST, httpEntity, String::class.java)
    }
}