package com.devon.dapuzzo.email

import com.devon.dapuzzo.util.random.randomEmailRequest
import com.devon.dapuzzo.util.random.randomString
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


/**
 * Created by devondapuzzo on 9/7/17.
 */
class EmailRequestTest {

    @Test
    fun `should verify valid email address`() {
        val subject = randomEmailRequest()
        assertThat(subject.isValid).isTrue()
    }

    @Test
    fun `should reject malformed email address`() {
        val subject = EmailRequest(randomString(), randomString(), randomString())
        assertThat(subject.isValid).isFalse()
    }
}