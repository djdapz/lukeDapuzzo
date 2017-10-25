package com.devon.dapuzzo.show

import com.devon.dapuzzo.util.random.LukeRandom.randomShow
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.whenever
import org.junit.Before
import org.junit.Test
import org.springframework.test.web.servlet.setup.MockMvcBuilders

import java.util.ArrayList

import com.nhaarman.mockito_kotlin.verify
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

open class ShowControllerTest {
    val mockShowService: ShowService = mock()
    val controller = ShowController(mockShowService)
    val mockMvc = MockMvcBuilders.standaloneSetup(controller).build()
    val expectedList = ArrayList<Show>()

    @Before
    fun setup() {
        expectedList.clear()
        expectedList.add(randomShow())
        expectedList.add(randomShow())
        whenever(mockShowService.getAllShows()).thenReturn(expectedList)
    }

    @Test
    @Throws(Exception::class)
    fun shouldRequestCorrectMapping() {
        mockMvc
                .perform(get("/api/shows"))
                .andExpect(status().isOk)
    }

    @Test
    @Throws(Exception::class)
    fun shouldDelegateToShowService() {
        mockMvc.perform(get("/api/shows"))
        verify(mockShowService).getAllShows()
    }
}