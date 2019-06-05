package com.dapuzzo.luke.core.random

import com.dapuzzo.luke.email.EmailRequest
import com.dapuzzo.luke.security.Account
import com.dapuzzo.luke.security.Credentials
import com.github.javafaker.Faker
import java.sql.Date
import java.time.LocalDate
import java.util.concurrent.ThreadLocalRandom


class myFaker {
    companion object {
        val INSTANCE = Faker()
    }
}

fun faker(): Faker = myFaker.INSTANCE

fun randomInt(): Int {
    val rand = java.util.Random()
    return rand.nextInt(1000000) + 1
}

fun randomInt(bound: Int): Int {
    val rand = java.util.Random()
    return rand.nextInt(1000000) % bound + 1
}

fun randomString(length: Int = 18): String {
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

fun randomLocalDate(): LocalDate {
    val minDay = LocalDate.of(1970, 1, 1).toEpochDay()
    val maxDay = LocalDate.of(2015, 12, 31).toEpochDay()
    val randomDay = ThreadLocalRandom.current().nextLong(minDay, maxDay)
    return LocalDate.ofEpochDay(randomDay)
}


fun <T> randomList(producer: () -> T): List<T> = (1..randomInt(5)).map { producer() }

fun randomEmailRequest() =
        EmailRequest(
                randomString(),
                randomEmailAddress(),
                randomString()
        )

private fun randomEmailAddress(): String = faker().internet().emailAddress()


fun randomCredentials(username: String = randomString(), password: String = randomString()): Credentials = Credentials(
        username,
        password
)

fun randomAccount(): Account = Account(
        username = faker().gameOfThrones().character(),
        token = faker().phoneNumber().phoneNumber()
)
