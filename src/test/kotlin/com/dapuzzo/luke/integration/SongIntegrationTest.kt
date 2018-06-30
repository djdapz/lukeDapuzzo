package com.dapuzzo.luke.integration

import com.dapuzzo.luke.song.domain.MusicEntity
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SOUNDCLOUD_SONG
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SPOTIFY_SONG
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.BodyInserters


class SongIntegrationTest: IntegrationTest() {

    @Test
    fun shouldCreateSpotifySongAndSoundcloudSongWithSameID() {
        assertSongCanCreateSuccessfully(
                id = "123",
                name = "I love carla",
                type = SPOTIFY_SONG
        )

        assertSongCanCreateSuccessfully(
                id = "123",
                name = "...Like a lot a lot",
                type = SOUNDCLOUD_SONG
        )
    }

    private fun assertSongCanCreateSuccessfully(id : String, name: String, type: MusicEntity.MusicType) {
        webClient.post().uri("/music")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", encodedCredentials)
                //language=json
                .body(BodyInserters.fromObject("""
                        {
                          "id": "$id",
                          "name": "$name",
                          "type": "$type"
                        }

                    """.trimIndent()))
                .exchange()
                .expectStatus().isOk
    }


}
