package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.credentialsJson
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomAccount
import com.dapuzzo.luke.security.Account
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.BodyInserters

class SecurityIntegrationTest  : IntegrationTest(){

    @Test
    fun shouldCreateAccountAndLogin() {
        val expectedAccount = randomAccount()
        val credentialsJson = credentialsJson(
                username = expectedAccount.username,
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

        assertThat(account).isEqualTo(expectedAccount)
    }
}