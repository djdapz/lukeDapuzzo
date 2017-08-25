package com.devon.dapuzzo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * Created by devondapuzzo on 8/25/17.
 */

@Component
public class EmailService {



    public ArrayList<String> distributionList;

    public EmailService() {
        distributionList = new ArrayList<>();
        distributionList.add("doug@dapuzzo.com");
        distributionList.add("june@dapuzzo.com");
        distributionList.add("devon.dapuzzo@gmail.com");
        distributionList.add("lpdapz@aol.com");
    }


    @Autowired
    public JavaMailSender emailSender;

    public void sendMessage(String to, String subject, String text){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }

    public void sendEmail(EmailRequest emailRequest) {
        StringBuilder email = new StringBuilder();

        email.append("FROM: ").append(emailRequest.name).append('\n').append('\n')
                .append("EMAIL: ").append(emailRequest.email).append('\n').append('\n')
                .append(emailRequest.message).append('\n').append('\n');

        for(String destination: distributionList){
            sendMessage(destination, "LUKE D'APUZZO Website Contact", email.toString());
        }
    }
}
