package com.devon.dapuzzo.show.controller

import com.devon.dapuzzo.config.JsonConfig
import com.devon.dapuzzo.show.domain.Venue
import com.devon.dapuzzo.show.service.VenueService
import com.devon.dapuzzo.util.random.randomList
import com.devon.dapuzzo.util.random.randomVenue
import com.fasterxml.jackson.module.kotlin.readValue
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders

class VenueControllerTest{

    val expectedList = randomList{ randomVenue()}

    val venueService = mock<VenueService> {
        on{getAllVenues()} doReturn expectedList
    }

    val subject = VenueController(venueService)
    val mockMvc = MockMvcBuilders.standaloneSetup(subject).build()

    @Test
    internal fun `should delegate to service`(){
        mockMvc
                .perform(MockMvcRequestBuilders.get("/api/venues"))
                .andExpect(MockMvcResultMatchers.status().isOk)

        verify(venueService).getAllVenues()
    }
    
    @Test
    internal fun `should return list of venues`(){
        val actualJson = mockMvc
                .perform(MockMvcRequestBuilders.get("/api/venues"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn().response.contentAsString

        val actual: List<Venue> = JsonConfig.objectMapper().readValue(actualJson)

        assertThat(actual).containsExactlyElementsOf(actual)
    }
    
    
}