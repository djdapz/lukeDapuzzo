package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.CleanupAfter
import com.dapuzzo.luke.core.credentialsJson
import com.dapuzzo.luke.core.encodeCredentials
import org.junit.Before
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.web.reactive.function.BodyInserters

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@RunWith(SpringRunner::class)
@CleanupAfter
@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
abstract class IntegrationTest {

    @Autowired
    lateinit var webClient: WebTestClient

    val credentialsJson = credentialsJson(
            username = "carla",
            password = "bear"
    )
    val encodedCredentials = encodeCredentials("carla", "bear")

    @Before
    fun setUp() {
        webClient.post().uri("/account/create")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(credentialsJson))
                .exchange()
                .expectStatus().isOk
    }

}
