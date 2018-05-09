package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.CleanupAfter
import com.dapuzzo.luke.core.CleanupBefore
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomAccount
import com.dapuzzo.luke.security.Account
import com.dapuzzo.luke.security.SecurityControllerTest.Companion.credentials
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.web.reactive.function.BodyInserters


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@RunWith(SpringRunner::class)
@CleanupAfter
@CleanupBefore
class SecurityIntegrationTest {

    @Autowired
    lateinit var webClient: WebTestClient

    @Test
    fun shouldCreateAccountAndLogin() {
        val expectedAccount = randomAccount()
        val credentialsJson = credentials(
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