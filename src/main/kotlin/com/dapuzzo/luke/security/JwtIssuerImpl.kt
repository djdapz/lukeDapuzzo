package com.dapuzzo.luke.security

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.security.Key
import java.time.Instant
import java.util.*
import javax.crypto.spec.SecretKeySpec
import javax.xml.bind.DatatypeConverter

@Component
class JwtIssuerImpl(
    @Value("\${dapuzzo.luke.jwt.issuer}") private val issuer: String,
    @Value("\${dapuzzo.luke.jwt.secret}") secret: String,
    @Value("\${dapuzzo.luke.jwt.seconds-token-is-valid}") secondsTokenIsValid: String
) : JwtIssuer {

    private val signatureAlgorithm = SignatureAlgorithm.HS256
    private val apiKeySecretBytes = DatatypeConverter.parseBase64Binary(secret)

    private val signingKey: Key = SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.jcaName)
    private val lengthOfTokensLife = secondsTokenIsValid.toLong()

    private val expiry
        get() = Date.from(Instant.now().plusSeconds(lengthOfTokensLife))

    override fun getToken(user: String): String = Jwts.builder()
        .setId(UUID.randomUUID().toString())
        .setSubject(user)
        .setExpiration(expiry)
        .setIssuer(issuer)
        .signWith(signatureAlgorithm, signingKey).compact()

}