package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.core.random.randomCity
import com.dapuzzo.luke.core.random.randomVenueEntity
import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.repository.VenueRepository
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions
import org.junit.Test

class VenueServiceTest {
    val venueEntity = randomVenueEntity()
    val expected = with(venueEntity){
        Venue(
                id = id,
                city = randomCity(city_id),
                name = name,
                googleMapsLink = googleMapsLink)
    }

    val venueRepository = mock<VenueRepository> {
        on { getById(any()) } doReturn venueEntity
    }

    val cityService = mock<CityService> {
        on { getCityById(any()) } doReturn expected.city
    }

    val subject = VenueService(venueRepository, cityService)


    @Test
    internal fun `should get venue by id`() {
        val actual = subject.getVenue(venueEntity.id)
        Assertions.assertThat(actual).isEqualTo(expected)
    }

    @Test
    internal fun `should call getVenueById`() {
        subject.getVenue(venueEntity.id)
        verify(venueRepository).getById(venueEntity.id)
    }

    @Test
    internal fun `should call getCityById`() {
        subject.getVenue(venueEntity.id)
        verify(cityService).getCityById(expected.city.id)

    }
}