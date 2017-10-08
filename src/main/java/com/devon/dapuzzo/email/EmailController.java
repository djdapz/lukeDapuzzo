package com.devon.dapuzzo.email;

import lombok.AllArgsConstructor;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Value
@AllArgsConstructor
public class EmailController {
    public EmailService emailService;

    @GetMapping( "/api/email")
    public ResponseEntity sendEmail(@RequestBody EmailRequest emailRequest) {
        if (!emailRequest.isValid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(emailRequest.getErrorMessage());
        }

        emailService.sendEmail(emailRequest);

        return ResponseEntity.ok("Great Success");
    }
}
