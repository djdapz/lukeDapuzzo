package com.dapuzzo.luke.email

import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders

class EmailControllerTest {

    private val emailService = mock<EmailService>()
    private val subject = EmailController(emailService)
    private val mockMvc = MockMvcBuilders.standaloneSetup(subject).build()

    private val validMessage = """
                    {
                      "name": "Producer Guy",
                      "email": "producer@email.com",
                      "message": "yayay youre great"

                    }
                """.trimIndent()

    @Test
    fun shouldSendEmail() {
        mockMvc.perform(
            post("/email")
                .content(validMessage)
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful)
    }

    @Test
    fun shouldDelegateToTheEmailService() {
        mockMvc.perform(
            post("/email")
                .content(validMessage)
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful)

        verify(emailService).send(Email(name = "Producer Guy", email="producer@email.com", message="yayay youre great"))
    }

}