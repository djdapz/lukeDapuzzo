package com.devon.dapuzzo.email;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

/**
 * Created by devondapuzzo on 8/25/17.
 */
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailRequest {
    String name;
    String email;
    String message;

    public EmailRequest(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    public EmailRequest(){
    }

    boolean isValid(){
        return name != null && email != null && message != null && EmailValidator.getInstance().isValid(email);
    }

    String getErrorMessage(){
        ArrayList<String> missingFields = new ArrayList<>();

        StringBuilder errorMessage = new StringBuilder();
        errorMessage.append("Email request invalid. Must include the following: ");

        if(name == null){
            missingFields.add("name");
        }

        if(email == null || !EmailValidator.getInstance().isValid(email)){
            missingFields.add("email");
        }

        if(message == null){
            missingFields.add("message");
        }

        for(int i = 0; i < missingFields.size(); i ++){
            errorMessage.append(missingFields.get(i));
            if(i < missingFields.size() -2){
                errorMessage.append(", ");
            }else{
                errorMessage.append(".");
            }
        }

        return errorMessage.toString();
    }
}
