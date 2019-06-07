package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.credentialsJson
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.security.Account
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.reactive.function.BodyInserters

@RestController
class TestRestController {
    @PostMapping("/security-test")
    fun somePostEndpoint() = "HI"

    @PutMapping("/security-test")
    fun somePutEndpoint() = "HI"

    @DeleteMapping("/security-test")
    fun someDeleteEndpoint() = "HI"

    @GetMapping("/security-test")
    fun someGetEndpoint() = "HI"
}

class SecurityIntegrationTest : IntegrationTest() {

    @Test
    fun shouldNotAllowForCallsToAnyPostWithoutAuth() {
        webClient.post().uri("/security-test")
            .contentType(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isUnauthorized
    }

    @Test
    fun shouldNotAllowForCallsToAnyPutWithoutAuth() {
        webClient.put().uri("/security-test")
            .contentType(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isUnauthorized
    }

    @Test
    fun shouldNotAllowForCallsToAnyDeleteWithoutAuth() {
        webClient.delete().uri("/security-test")
            .exchange()
            .expectStatus().isUnauthorized
    }

    @Test
    fun shouldAllowCallsToAnyGetWithoutAuth() {
        webClient.get().uri("/security-test")
            .exchange()
            .expectStatus().isOk
    }

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


        webClient.post().uri("/login")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(credentialsJson))
            .exchange()
            .expectStatus().isOk
    }
}