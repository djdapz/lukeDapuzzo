package com.devon.dapuzzo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;

/**
 * Created by devondapuzzo on 8/24/17.
 */

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    public EmailService emailService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity sendEmail(@RequestBody EmailRequest emailRequest) {
        if (!emailRequest.isValid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(emailRequest.getErrorMessage());
        }

        emailService.sendEmail(emailRequest);

        return ResponseEntity.ok("Great Success");
    }
}
