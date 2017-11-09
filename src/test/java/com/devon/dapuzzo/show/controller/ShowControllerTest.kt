package com.devon.dapuzzo.show.controller

import com.devon.dapuzzo.config.JsonConfig
import com.devon.dapuzzo.show.domain.Show
import com.devon.dapuzzo.show.service.ShowService
import com.devon.dapuzzo.util.random.randomShow
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import com.nhaarman.mockito_kotlin.whenever
import org.assertj.core.api.Assertions
import org.junit.Before
import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import java.util.*

class ShowControllerTest {

    private val expectedList = ArrayList<Show>()

    private val mockShowService: ShowService = mock<ShowService> {
        on {getAllShows()} doReturn expectedList
    }

    private val controller = ShowController(mockShowService)
    private val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()!!

    @Before
    fun setup() {
        expectedList.clear()
        expectedList.add(randomShow())
        expectedList.add(randomShow())
        whenever(mockShowService.getAllShows()).thenReturn(expectedList)
    }

    @Test
    fun shouldDelegateToShowServiceOnGet() {
        mockMvc.perform(get("/api/shows"))
        verify(mockShowService).getAllShows()
    }

    @Test
    internal fun `should return list of shows`(){
        val actualJson = mockMvc
                .perform(MockMvcRequestBuilders.get("/api/shows"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn().response.contentAsString

        val actual: List<Show> = JsonConfig.objectMapper().readValue(actualJson)

        Assertions.assertThat(actual).containsExactlyElementsOf(actual)
    }

//    @Test
//    fun `should request correct mapping for post`() {
//        mockMvc
//                .perform(post("/api/shows")
//                        .content(expectedJson)
//                        .contentType(APPLICATION_JSON))
//                .andExpect(status().isOk)
//    }

//    @Test
//    fun `should delegate to show service on post`() {
//        mockMvc
//                .perform(post("/api/shows")
//                        .content(expectedJson)
//                        .contentType(APPLICATION_JSON))
//        verify(mockShowService).createShow(expected)
//    }
//
//    @Test
//    fun `should return show that was created after post`() {
//        val actualJson = mockMvc
//                .perform(post("/api/shows")
//                        .content(expectedJson)
//                        .contentType(APPLICATION_JSON))
//                .andReturn().response.contentAsString
//        val actual = objectMapper.readValue(actualJson, ShowView::class.java)
//        assertThat(actual).isEqualTo(expected)
//    }
}