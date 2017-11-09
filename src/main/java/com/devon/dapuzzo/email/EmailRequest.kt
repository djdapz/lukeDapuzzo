package com.devon.dapuzzo.email

import org.apache.commons.validator.routines.EmailValidator

/**
 * Created by devondapuzzo on 8/25/17.
 */
data class EmailRequest(
        val name: String,
        val email: String,
        val message: String
) {


    internal val isValid: Boolean
        get() = EmailValidator.getInstance().isValid(email)

    internal val errorMessage: String
        get() {
            if (EmailValidator.getInstance().isValid(email)) {
                return "Unknown email error message"
            }
            return "email address $email is invalid"
        }


    internal val formattedMessage: String
        get() {
            return """
            FROM: ${name} | ${email}
            -----------------------------------------------------
            MESSAGE: ${message}
            """.trimIndent()
        }

}
