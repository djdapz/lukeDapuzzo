package com.devon.dapuzzo;

import java.util.ArrayList;

/**
 * Created by devondapuzzo on 8/25/17.
 */
public class EmailRequest {
    public String name;
    public String email;
    public String message;

    boolean isValid(){
        return name != null && email != null && message != null;
    }

    String getErrorMessage(){
        ArrayList<String> missingFields = new ArrayList<>();

        StringBuilder errorMessage = new StringBuilder();
        errorMessage.append("Email request invalid. Must include the following: ");

        if(name == null){
            missingFields.add("name");
        }

        if(email == null){
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


    public EmailRequest() {
    }

    public EmailRequest(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
