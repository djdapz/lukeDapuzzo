package com.dapuzzo.luke.song

import com.dapuzzo.luke.config.JsonConfig
import com.dapuzzo.luke.core.random.randomSongEntity
import com.dapuzzo.luke.song.domain.Music
import com.dapuzzo.luke.song.domain.MusicEntity
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SPOTIFY_ALBUM
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.SPOTIFY_SONG
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.Arrays.asList


class MusicControllerTest {
    private val firstMusic = randomSongEntity(type = SPOTIFY_SONG)
    private val secondMusic = randomSongEntity(type = SPOTIFY_ALBUM)

    private val music = HashMap<MusicEntity.MusicType, List<Music>>().apply {
        this[SPOTIFY_SONG] = asList(firstMusic.toMusic())
        this[SPOTIFY_ALBUM] = asList(secondMusic.toMusic())
    }
    //language=json
    val expectedMapOfSongs = """    {
      "SPOTIFY_ALBUM": [
        {
          "id": "missingValue",
          "name": "missingValue"
        }
      ],
      "SPOTIFY_SONG": [
        {
          "id": "missingValue",
          "name": "missingValue"
        }
      ]
    }""".trimIndent()
    private val newSong = randomSongEntity()

    private val mockSongService = mock<MusicService> {
        on { getAllMusic() } doReturn music
        on { createMusic(any()) } doReturn newSong
        on { getMusicById(any()) } doReturn firstMusic
    }

    private val controller = MusicController(mockSongService)
    private val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()


    @Test
    internal fun `should return list of music`() {

        mockMvc
                .perform(get("/music"))
                .andExpect(status().isOk)
                .andDo { println(it.response.contentAsString) }
                .andExpect({ content().json(expectedMapOfSongs) })


    }

    @Test
    internal fun `should return song by id`() {
        val actualJson = mockMvc
                .perform(get("/music/" + firstMusic.id))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actual: MusicEntity = JsonConfig.objectMapper().readValue(actualJson)

        assertThat(actual).isEqualTo(firstMusic)
        verify(mockSongService).getMusicById(firstMusic.id)
    }

    @Test
    internal fun `should add song `() {
        val actualJson = mockMvc
                .perform(
                        post("/music")
                                .content(JsonConfig.asString(newSong))
                                .header("Content-Type", "application/json"))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actual = JsonConfig.asObject(actualJson, MusicEntity::class.java)

        assertThat(actual).isEqualTo(newSong)
        verify(mockSongService).createMusic(newSong)
    }

    @Test
    internal fun `should delete song `() {
        mockMvc.perform(
                delete("/music/${firstMusic.id}")
                        .header("Content-Type", "application/json"))
                .andExpect(status().isOk)

        verify(mockSongService).delete(firstMusic.id)
    }
}