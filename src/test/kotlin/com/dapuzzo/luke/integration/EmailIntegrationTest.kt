package com.dapuzzo.luke.integration

import com.github.tomakehurst.wiremock.client.WireMock.*
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.BodyInserters
import com.github.tomakehurst.wiremock.junit.WireMockRule
import org.junit.Before
import org.junit.Rule


class EmailIntegrationTest : IntegrationTest() {

    @Rule
    @JvmField
    final var wireMockRule = WireMockRule(8089)


    @Before
    override fun setUp() {
        super.setUp()

        stubFor(
            post("/email")
                .withHeader("Content-Type", containing("application/json"))
                .willReturn(
                    aResponse()
                        .withStatus(200)
                        .withHeader("Content-Type", "text/xml")
                        .withBody("Great Success!")
                )
        )
    }

    @Test
    fun shouldCallEmailServiceToSendMail() {
        webClient.post().uri("/email")
            .contentType(MediaType.APPLICATION_JSON)
            .header("Authorization", token)
            //language=json
            .body(
                BodyInserters.fromObject(
                    """
                        {
                          "name": "Mr Producer",
                          "email": "boss@company.com",
                          "message": "I like your stuff guy"
                        }

                    """.trimIndent()
                )
            )
            .exchange()
            .expectStatus().isOk

        verify(
            postRequestedFor(urlMatching("/email"))
                .withRequestBody(
                    equalToJson(
                        //language=json
                        """
                          {
                            "name": "Mr Producer",
                            "message": "I like your stuff guy",
                            "to": ["luke@luke.luke"],
                            "from": "boss@company.com"
                        }

                    """.trimIndent()
                    )
                )
                .withHeader("Content-Type", containing("application/json"))
        );
    }
}
