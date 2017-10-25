package com.devon.dapuzzo.email

import lombok.*
import lombok.experimental.FieldDefaults
import org.apache.commons.validator.routines.EmailValidator
import org.springframework.beans.factory.annotation.Autowired

import java.util.ArrayList

/**
 * Created by devondapuzzo on 8/25/17.
 */
@FieldDefaults(level = AccessLevel.PRIVATE)
data class EmailRequest(val name: String, val email: String, val message: String) {

    internal val isValid: Boolean
        get() = EmailValidator.getInstance().isValid(email)

    internal val errorMessage: String
        get() {
            if(EmailValidator.getInstance().isValid(email)){
                return "Unknown email error message"
            }
            return "email address $email is invalid"
        }
}
