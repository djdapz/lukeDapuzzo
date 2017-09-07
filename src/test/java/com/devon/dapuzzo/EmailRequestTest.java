package com.devon.dapuzzo;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by devondapuzzo on 9/7/17.
 */
public class EmailRequestTest {

    @Test
    public void shouldVerifyValidEmailAddress() throws Exception {
        EmailRequest emailRequestGood = new EmailRequest("joe", "joe@gmail.com", "Hey bro");
        assertTrue(emailRequestGood.isValid());

        EmailRequest emailRequestBad = new EmailRequest();
        assertFalse(emailRequestBad.isValid());

        emailRequestBad = new EmailRequest("joe", "joe@gmailcom", "Hey bro");
        assertFalse(emailRequestBad.isValid());
    }
}