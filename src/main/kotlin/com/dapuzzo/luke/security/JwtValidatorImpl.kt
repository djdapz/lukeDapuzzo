package com.dapuzzo.luke.security

import javax.xml.bind.DatatypeConverter
import io.jsonwebtoken.Jwts
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class JwtValidatorImpl(@Value("\${dapuzzo.luke.jwt.secret}") private val secret: String) : JwtValidator{

    override fun isValid(jwt: String): Boolean {
        return try {
            Jwts.parser()
                .setSigningKey(DatatypeConverter.parseBase64Binary(secret))
                .parseClaimsJws(jwt).body
            true
        } catch (e: Exception) {
            false
        }

    }
}
