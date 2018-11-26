package com.dapuzzo.luke.integration

import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomLocalDate
import com.dapuzzo.luke.song.domain.MusicEntity
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SOUNDCLOUD_SONG
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SPOTIFY_SONG
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
            webClient.get().uri("/venues")
                .header("Authorization", encodedCredentials)
                .exchange()
                .expectBody()
                .json(
                //language=json
                """
                    {
                      "venues": [
                        {
                          "id": "13",
                          "name":  "The Beebop"
                        },
                        {
                          "id": "14",
                          "name":  "Daves Bar"
                        }
                      ]
                    }

                """.trimIndent())
    }

    @Test
    fun shouldBeAbleToCreateANewShowWithAVenueThatExists(){
        faker().rockBand()
        webClient.post().uri("/shows")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", encodedCredentials)
                //language=json
                .body(BodyInserters.fromObject("""
                        {
                          "venueId": "13",
                          "style": "${faker().rockBand().name()}"
                          "date": "${randomLocalDate()}"
                        }
                    """.trimIndent()))
                .exchange()
                .expectStatus()
                .isCreated
    }


}
