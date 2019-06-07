package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.random.randomString
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import java.security.Key
import java.time.Instant.now
import java.time.ZonedDateTime
import java.util.*
import javax.crypto.spec.SecretKeySpec
import javax.xml.bind.DatatypeConverter


class JwtValidatorImplTest {

    private val mySecretKey = "SUPER_DUPER_SECRET"

    private val signatureAlgorithm = SignatureAlgorithm.HS256
    private val apiKeySecretBytes = DatatypeConverter.parseBase64Binary(mySecretKey)

    private val signingKey: Key = SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.jcaName)

    private val expiration = Date.from(ZonedDateTime.now().plusSeconds(10).toInstant())

    private val subject = JwtValidatorImpl(mySecretKey)

    private val validJwtBuilder
        get() = Jwts.builder()
            .setId(UUID.randomUUID().toString())
            .setSubject("I_AM_A_USER")
            .setIssuer("lukedapuzzo.com")
            .setExpiration(expiration)
            .signWith(signatureAlgorithm, signingKey)

    @Test
    fun shouldValidateJwt() {
        val jwt = validJwtBuilder.compact()

        val isValid = subject.isValid(jwt)

        assertThat(isValid).isEqualTo(true)
    }

    @Test
    fun shouldNotAcceptAnExpiredJwt() {
        val jwt = validJwtBuilder
            .setExpiration(Date.from(now().minusSeconds(1))).compact()

        val isValid = subject.isValid(jwt)

        assertThat(isValid).isEqualTo(false)
    }

    @Test
    fun shouldNotValidateAJwtSignedBySomethingElse() {
        val otherSecretBytes = DatatypeConverter.parseBase64Binary("SOME_OTHER_SECRET")
        val otherSecretSigningKey = SecretKeySpec(otherSecretBytes, signatureAlgorithm.jcaName)

        val jwt = validJwtBuilder
            .signWith(signatureAlgorithm, otherSecretSigningKey).compact()

        val isValid = subject.isValid(jwt)

        assertThat(isValid).isEqualTo(false)

    }

    @Test
    fun shouldNotAcceptANonJWTString() {
        val isValid = subject.isValid(randomString())
        assertThat(isValid).isEqualTo(false)
    }
}