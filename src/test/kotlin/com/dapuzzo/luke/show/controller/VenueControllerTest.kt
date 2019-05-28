package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.config.JsonConfig
import com.dapuzzo.luke.core.random.randomList
import com.dapuzzo.luke.core.random.randomVenue
import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.service.VenueService
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockitokotlin2.doReturn
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders

class VenueControllerTest {

    val expectedList = randomList { randomVenue() }

    val venueService = mock<VenueService> {
        on { getAllVenues() } doReturn expectedList
    }

    val subject = VenueController(venueService)
    val mockMvc = MockMvcBuilders.standaloneSetup(subject).build()

    @Test
    internal fun `should delegate to service`() {
        mockMvc
                .perform(MockMvcRequestBuilders.get("/venues"))
                .andExpect(MockMvcResultMatchers.status().isOk)

        verify(venueService).getAllVenues()
    }

    @Test
    internal fun `should return list of venues in a response object`() {
        val actualJson = mockMvc
                .perform(MockMvcRequestBuilders.get("/venues"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn().response.contentAsString

        val actual: VenueController.VenuesResponseBody = JsonConfig.objectMapper().readValue(actualJson)

        assertThat(actual.venues).isEqualTo(expectedList)
    }


}