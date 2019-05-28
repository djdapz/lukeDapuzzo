package com.dapuzzo.luke.integration

import com.dapuzzo.luke.bio.BioResponseBody
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.BodyInserters

class BioIntegrationTest : IntegrationTest() {

    @Test
    fun shouldUpdateBio() {
        val defaultBio = getBio().bio
        assertThat(defaultBio).isEqualTo(originalBio)

        webClient.put().uri("/bio")
            .contentType(MediaType.APPLICATION_JSON)
            .header("Authorization", encodedCredentials)
            //language=json
            .body(
                BodyInserters.fromObject(
                    """
                        {
                          "bio": "Yo my name is luke and i'm dope \nlisten to my stuff"
                        }

                    """.trimIndent()
                )
            )
            .exchange()
            .expectStatus().isOk

        val updatedBio = getBio().bio
        assertThat(updatedBio).isEqualTo("Yo my name is luke and i'm dope \nlisten to my stuff")
    }

    private fun getBio(): BioResponseBody {
        return webClient.get().uri("/bio")
            .exchange()
            .expectStatus().isOk
            .returnResult(BioResponseBody::class.java)
            .responseBody
            .next()
            .block()!!
    }
    val originalBio =
        """Luke Dapuzzo is a solo independent recording artist and songwriter from Boulder, Colorado. His unique sound blends together a variety of genres from rockabilly to metalcore.\\nAll music released by this artist was performed, recorded, and mixed by Luke himself."""

}
