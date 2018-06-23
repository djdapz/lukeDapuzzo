package com.dapuzzo.luke.core

import java.util.*

fun encodeCredentials(user: String, password: String) = "Basic " + String(Base64.getEncoder().encode("$user:$password".toByteArray()))

//language=json
fun credentialsJson(username: String, password: String) = "{\n  \"username\": \"$username\",\n  \"password\": \"$password\"\n}"

