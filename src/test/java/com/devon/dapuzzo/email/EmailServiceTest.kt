package com.devon.dapuzzo.email

import com.devon.dapuzzo.util.random.LukeRandom.randomEmailRequest
import com.nhaarman.mockito_kotlin.*
import org.junit.Assert.*
import org.junit.Before
import org.junit.Test
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender

/**
 * Created by devondapuzzo on 10/24/17.
 */
class EmailServiceTest {

    val javaMailSender : JavaMailSender = mock()
    val subject = EmailService(javaMailSender)

    @Test
    fun `should call JavaMailSender n times`() {
        subject.sendEmail(randomEmailRequest())
        verify(javaMailSender, times(subject.distributionList.size)).send(any<SimpleMailMessage>())
    }
}