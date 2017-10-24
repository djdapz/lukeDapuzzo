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
data class EmailRequest(val name: String?, val email: String?, val message: String?) {

    internal val isValid: Boolean
        get() = name != null && email != null && message != null && EmailValidator.getInstance().isValid(email)

    internal val errorMessage: String
        get() {
            val missingFields = ArrayList<String>()

            val errorMessage = StringBuilder()
            errorMessage.append("Email request invalid. Must include the following: ")

            if (name == null) {
                missingFields.add("name")
            }

            if (email == null || !EmailValidator.getInstance().isValid(email)) {
                missingFields.add("email")
            }

            if (message == null) {
                missingFields.add("message")
            }

            for (i in missingFields.indices) {
                errorMessage.append(missingFields[i])
                if (i < missingFields.size - 2) {
                    errorMessage.append(", ")
                } else {
                    errorMessage.append(".")
                }
            }

            return errorMessage.toString()
        }
}
