package com.dapuzzo.luke.security

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureException
import org.assertj.core.api.Assertions.assertThat

import org.junit.Test
import java.time.Instant.now
import java.util.*
import javax.xml.bind.DatatypeConverter

class JwtIssuerImplTest {

    private val secret = "KRABBY_PATTY_FORUMLA"
    private val issuer = "the-website.io"
    private val secondsOfValidity = "86400"
    private val subject = JwtIssuerImpl(issuer, secret, secondsOfValidity)

    @Test
    fun shouldIssueJwtThatICanUnsign() {
        val token = subject.getToken("I_AM_GROOT")

        val claim = Jwts.parser()
            .setSigningKey(DatatypeConverter.parseBase64Binary(secret))
            .parseClaimsJws(token).body

        assertThat(claim.subject).isEqualTo("I_AM_GROOT")
    }

    @Test(expected = SignatureException::class)
    fun shouldNotBeAbleToUnsignTheTokenWithoutKey() {
        val token = subject.getToken("I_AM_GROOT")

        Jwts.parser()
            .setSigningKey(DatatypeConverter.parseBase64Binary("SOMETHING_ELSE"))
            .parseClaimsJws(token).body
    }

    @Test
    fun shouldAddWebsiteNameToToken(){
        val token = subject.getToken("I_AM_GROOT")

        val claim = Jwts.parser()
            .setSigningKey(DatatypeConverter.parseBase64Binary(secret))
            .parseClaimsJws(token).body

        assertThat(claim.issuer).isEqualTo("the-website.io")
    }

    @Test
    fun shouldOnlyIssueTokenForInjectedAmountOfTime(){
        val token = subject.getToken("I_AM_GROOT")

        val claim = Jwts.parser()
            .setSigningKey(DatatypeConverter.parseBase64Binary(secret))
            .parseClaimsJws(token).body

        val timeTheTokenShouldBeValid = Date.from(now().plusSeconds(secondsOfValidity.toLong() - 5))
        val timeTheTokenShouldNotBeValid = Date.from(now().plusSeconds(secondsOfValidity.toLong() + 5))

        assertThat(claim.expiration).isAfter(timeTheTokenShouldBeValid)
        assertThat(claim.expiration).isBefore(timeTheTokenShouldNotBeValid)
    }
}