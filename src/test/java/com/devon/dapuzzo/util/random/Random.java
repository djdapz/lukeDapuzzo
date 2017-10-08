package com.devon.dapuzzo.util.random;

import com.devon.dapuzzo.show.Show;

import java.sql.Date;
import java.time.LocalDate;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Created by devondapuzzo on 9/22/17.
 */
public class Random {
    public static Integer randomInt(){
        java.util.Random rand = new java.util.Random();
        return rand.nextInt(1000000) + 1;
    }

    public static String randomString(Integer length){
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        java.util.Random rnd = new java.util.Random();
        while (salt.length() < length) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;
    }

    public static String randomString(){
      return randomString(18);
    }

    public static Date randomDate(){
        long minDay = LocalDate.of(1970, 1, 1).toEpochDay();
        long maxDay = LocalDate.of(2015, 12, 31).toEpochDay();
        long randomDay = ThreadLocalRandom.current().nextLong(minDay, maxDay);
        LocalDate randomDate = LocalDate.ofEpochDay(randomDay);
        return new java.sql.Date(randomDate.toEpochDay());
    }

    public static Show randomShow(){
        return new Show(randomInt(), randomDate(), randomString(), randomString(), randomString(), randomString());
    }
}
