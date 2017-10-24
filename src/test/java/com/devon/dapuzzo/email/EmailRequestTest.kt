package com.devon.dapuzzo.email

import com.devon.dapuzzo.email.EmailRequest
import org.junit.Test

import org.junit.Assert.*

/**
 * Created by devondapuzzo on 9/7/17.
 */
class EmailRequestTest {

    @Test
    @Throws(Exception::class)
    fun shouldVerifyValidEmailAddress() {
        val emailRequestGood = EmailRequest("joe", "joe@gmail.com", "Hey bro")
        assertTrue(emailRequestGood.isValid)

        var emailRequestBad = EmailRequest(null, null, null)
        assertFalse(emailRequestBad.isValid)

        emailRequestBad = EmailRequest("joe", "joe@gmailcom", "Hey bro")
        assertFalse(emailRequestBad.isValid)
    }
}