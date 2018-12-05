package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.config.JsonConfig
import com.dapuzzo.luke.core.random.randomShow
import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.service.ShowService
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import com.nhaarman.mockito_kotlin.whenever
import org.assertj.core.api.Assertions
import org.junit.Before
import org.junit.Test
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.time.LocalDate
import java.util.*

class ShowControllerTest {

    private val expectedList = ArrayList<Show>()

    private val mockShowService: ShowService = mock {
        on { getAllShows() } doReturn expectedList
    }

    private val controller = ShowController(mockShowService)
    private val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()

    @Before
    fun setup() {
        expectedList.clear()
        expectedList.add(randomShow())
        expectedList.add(randomShow())
        whenever(mockShowService.getAllShows()).thenReturn(expectedList)
    }

    @Test
    fun shouldDelegateToShowServiceOnGet() {
        mockMvc.perform(get("/shows"))
        verify(mockShowService).getAllShows()
    }

    @Test
    fun shouldReturnListOfShows() {
        val actualJson = mockMvc
                .perform(MockMvcRequestBuilders.get("/shows"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn().response.contentAsString

        val actual: List<Show> = JsonConfig.objectMapper().readValue(actualJson)

        Assertions.assertThat(actual).containsExactlyElementsOf(actual)
    }

    @Test
    fun shouldDeleteShow() {
        mockMvc
                .perform(MockMvcRequestBuilders.delete("/shows/123"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn().response.contentAsString

        verify(mockShowService).deleteShow(123)
    }

    @Test
    fun `should delegate to show service on post`() {
        mockMvc
                .perform(post("/shows")
                        //language=json
                        .content("""
                            {
                              "venueId": "12",
                              "notes": "Acoustic",
                              "date": "2018-12-10"
                            }
                        """.trimIndent())
                        .contentType(APPLICATION_JSON))

        verify(mockShowService).createShow(12,  "Acoustic", LocalDate.parse("2018-12-10"))
    }
}