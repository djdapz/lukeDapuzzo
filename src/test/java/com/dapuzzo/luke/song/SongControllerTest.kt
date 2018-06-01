package com.dapuzzo.luke.song

import com.dapuzzo.luke.config.JsonConfig
import com.dapuzzo.luke.core.random.randomSongEntity
import com.dapuzzo.luke.song.domain.SongEntity
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.*


class SongControllerTest {
    private val secondSong = randomSongEntity()
    private val firstSong = randomSongEntity()
    val newSong = randomSongEntity()


    private val expectedList = Arrays.asList(firstSong, secondSong)

    private val mockSongService = mock<SongService> {
        on { getAllSongs() } doReturn expectedList
        on { getSongById(any()) } doReturn firstSong
        on { createSong(any()) } doReturn newSong
    }

    private val controller = SongController(mockSongService)
    private val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()


    @Test
    internal fun `should return list of shows`() {
        val actualJson = mockMvc
                .perform(get("/songs"))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actual: List<SongEntity> = JsonConfig.objectMapper().readValue(actualJson)

        assertThat(actual).containsExactlyElementsOf(expectedList)
        verify(mockSongService).getAllSongs()
    }

    @Test
    internal fun `should return show by id`() {
        val actualJson = mockMvc
                .perform(get("/songs/" + firstSong.id))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actual: SongEntity = JsonConfig.objectMapper().readValue(actualJson)

        assertThat(actual).isEqualTo(firstSong)
        verify(mockSongService).getSongById(firstSong.id)
    }

    @Test
    internal fun `should add show `() {
        val actualJson = mockMvc
                .perform(
                        post("/songs")
                                .content(JsonConfig.asString(newSong))
                                .header("Content-Type", "application/json"))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actual = JsonConfig.asObject(actualJson, SongEntity::class.java)

        assertThat(actual).isEqualTo(newSong)
        verify(mockSongService).createSong(newSong)
    }

    @Test
    internal fun `should delete show `() {
        mockMvc.perform(
                delete("/songs/${firstSong.id}")
                        .header("Content-Type", "application/json"))
                .andExpect(status().isOk)

        verify(mockSongService).delete(firstSong.id)
    }
}