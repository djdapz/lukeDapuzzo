package com.devon.dapuzzo.util.random

import com.devon.dapuzzo.show.Show

import java.sql.Date
import java.time.LocalDate
import java.util.concurrent.ThreadLocalRandom

/**
 * Created by devondapuzzo on 9/22/17.
 */
object Random {
    fun randomInt(): Int {
        val rand = java.util.Random()
        return rand.nextInt(1000000) + 1
    }

    @JvmOverloads fun randomString(length: Int? = 18): String {
        val SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        val salt = StringBuilder()
        val rnd = java.util.Random()
        while (salt.length < length) { // length of the random string.
            val index = (rnd.nextFloat() * SALTCHARS.length).toInt()
            salt.append(SALTCHARS[index])
        }
        val saltStr = salt.toString()
        return saltStr
    }

    fun randomDate(): Date {
        val minDay = LocalDate.of(1970, 1, 1).toEpochDay()
        val maxDay = LocalDate.of(2015, 12, 31).toEpochDay()
        val randomDay = ThreadLocalRandom.current().nextLong(minDay, maxDay)
        val randomDate = LocalDate.ofEpochDay(randomDay)
        return java.sql.Date(randomDate.toEpochDay())
    }

    fun randomShow(): Show {
        return Show();
    }
}
