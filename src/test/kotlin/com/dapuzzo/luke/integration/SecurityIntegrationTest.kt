package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.credentialsJson
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.security.Account
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.BodyInserters

class SecurityIntegrationTest : IntegrationTest() {

    @Test
    fun shouldCreateAccountAndLogin() {
        val username = faker().gameOfThrones().character()
        val credentialsJson = credentialsJson(
            username = username,
            password = faker().rickAndMorty().location()
        )

        webClient.post().uri("/login")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(credentialsJson))
            .exchange()
            .expectStatus().isUnauthorized

        webClient.post().uri("/account/create")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(credentialsJson))
            .exchange()
            .expectStatus().isOk


        val account = webClient.post().uri("/login")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(credentialsJson))
            .exchange()
            .expectStatus().isOk
            .returnResult(Account::class.java).responseBody.blockFirst()

        val token: String = jdbcTemplate
            .queryForObject("SELECT token from account WHERE username='$username'")
            { row, _ -> row.getString("token") }!!


        val expectedAccount = Account(
            username = username,
            token = token

        )
        assertThat(account).isEqualTo(expectedAccount)
    }
}