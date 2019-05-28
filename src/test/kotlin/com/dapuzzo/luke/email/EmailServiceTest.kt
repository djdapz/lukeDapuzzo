package com.dapuzzo.luke.email

import com.dapuzzo.luke.core.random.randomEmailRequest
import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.times
import com.nhaarman.mockitokotlin2.verify
import org.junit.Test
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import java.util.Arrays.asList

/**
 * Created by devondapuzzo on 10/24/17.
 */
class EmailServiceTest {

    private val javaMailSender = mock<JavaMailSender>()
    private val distributionList: Array<String> = asList("email@guy.com", "another@email.com").toTypedArray()
    val subject = EmailService(javaMailSender, distributionList)

    @Test
    fun `should call JavaMailSender once `() {
        subject.sendEmail(randomEmailRequest())
        verify(javaMailSender, times(1)).send(any<SimpleMailMessage>())
    }
}