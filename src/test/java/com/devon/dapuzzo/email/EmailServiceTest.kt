package com.devon.dapuzzo.email

import com.devon.dapuzzo.core.random.randomEmailRequest
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.times
import com.nhaarman.mockito_kotlin.verify
import org.junit.Test
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import java.util.Arrays.asList

/**
 * Created by devondapuzzo on 10/24/17.
 */
class EmailServiceTest {

    val javaMailSender : JavaMailSender = mock()
    val distributionList : Array<String> = asList("email@guy.com", "another@email.com").toTypedArray()
    val subject = EmailService(javaMailSender, distributionList)

    @Test
    fun `should call JavaMailSender once `() {
        subject.sendEmail(randomEmailRequest())
        verify(javaMailSender, times(1)).send(any<SimpleMailMessage>())
    }
}