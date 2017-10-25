package com.devon.dapuzzo.show

import com.devon.dapuzzo.util.random.LukeRandom.randomShow
import com.fasterxml.jackson.databind.ObjectMapper
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.whenever
import org.junit.Before
import org.junit.Test
import org.springframework.test.web.servlet.setup.MockMvcBuilders

import java.util.ArrayList

import com.nhaarman.mockito_kotlin.verify
import org.springframework.http.MediaType
import org.springframework.http.MediaType.*
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

open class ShowControllerTest {

    val objectMapper: ObjectMapper = ObjectMapper()

    val mockShowService: ShowService = mock()
    val controller = ShowController(mockShowService)
    val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    val expectedList = ArrayList<Show>()
    val show = randomShow()

    @Before
    fun setup() {
        expectedList.clear()
        expectedList.add(randomShow())
        expectedList.add(randomShow())
        whenever(mockShowService.getAllShows()).thenReturn(expectedList)
    }

    @Test
    fun shouldRequestCorrectMappingForGet() {
        mockMvc
                .perform(get("/api/shows"))
                .andExpect(status().isOk)
    }

    @Test
    fun shouldDelegateToShowServiceOnGet() {
        mockMvc.perform(get("/api/shows"))
        verify(mockShowService).getAllShows()
    }

    @Test
    fun `should request correct mapping for post`() {
        mockMvc
                .perform(post("/api/shows"))
                .andExpect(status().isOk)
    }

    @Test
    fun `should delegate to show service on post`() {
        mockMvc.perform(post("/api/shows"))
        verify(mockShowService).createShow()
    }

    @Test
    fun `should return show that was created after post`() {
        val randomShowJson = objectMapper.writeValueAsString(show)
        mockMvc
                .perform(post("/api/shows")
                        .content(randomShowJson)
                        .contentType(APPLICATION_JSON))
        verify(mockShowService).createShow()
    }
}