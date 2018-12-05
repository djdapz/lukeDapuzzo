package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomLocalDate
import com.dapuzzo.luke.show.controller.VenueController
import com.dapuzzo.luke.show.domain.City
import com.dapuzzo.luke.show.domain.Venue
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.reactive.function.BodyInserters


class ShowIntegrationTest : IntegrationTest() {
    @Autowired
    lateinit var jdbcTemplate: JdbcTemplate

    @Before
    override fun setUp() {
        super.setUp()
        jdbcTemplate.execute("INSERT INTO state (abbreviation, name) VALUES ('CO', 'Colorado')")
        jdbcTemplate.execute("INSERT INTO city (id, state, name) VALUES (12, 'CO', 'Boulder')")
        jdbcTemplate.execute("INSERT INTO venue (id, city_id, google_maps_link, name) VALUES (13, 12, 'http://maps.io/venue1', 'The Beebop')")
        jdbcTemplate.execute("INSERT INTO venue (id, city_id, google_maps_link, name) VALUES (14, 12, 'http://maps.io/venue2', 'Daves Bar')")
    }

    @Test
    fun shouldGetAListOfAllVenuesAndIds() {
        val returnResult = webClient.get().uri("/venues")
                .header("Authorization", encodedCredentials)
                .exchange()
                .returnResult(VenueController.VenuesResponseBody::class.java)
                .responseBody
                .next()
                .block()!!

        val boulder = City(12, "Boulder", com.dapuzzo.luke.show.domain.State("CO", "Colorado"))

        assertThat(returnResult.venues).containsExactlyElementsOf(
                listOf(
                        Venue(city = boulder, id = 13, name = "The Beebop", googleMapsLink = "http://maps.io/venue1"),
                        Venue(city = boulder, id = 14, name = "Daves Bar", googleMapsLink = "http://maps.io/venue2")
                )
        )
    }

    @Test
    fun shouldBeAbleToCreateANewShowWithAVenueThatExists() {
        webClient.post().uri("/shows")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", encodedCredentials)
                //language=json
                .body(BodyInserters.fromObject("""
                        {
                          "venueId": "13",
                          "notes": "${faker().rockBand().name()}",
                          "date": "${randomLocalDate()}"
                        }
                    """.trimIndent()))
                .exchange()
                .expectStatus()
                .isCreated
    }

    @Test
    fun shouldBeAbleToCreateANewVenueWithACityThatDidntPreviouslyExist() {
        webClient.post().uri("/venues")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", encodedCredentials)
                //language=json
                .body(BodyInserters.fromObject("""
                        {
                          "name": "${faker().rockBand().name()}",
                          "googleMapsLink": "${faker().rockBand().name()}",
                          "city": "${faker().rockBand().name()}",
                          "state": "CO"
                        }
                    """.trimIndent()))
                .exchange()
                .expectStatus()
                .isCreated
    }


}
