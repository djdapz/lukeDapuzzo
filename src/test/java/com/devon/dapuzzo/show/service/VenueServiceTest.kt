package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.show.domain.Venue
import com.devon.dapuzzo.show.repository.VenueRepository
import com.devon.dapuzzo.util.random.randomCity
import com.devon.dapuzzo.util.random.randomVenueEntity
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
        on { getVenueById(any()) } doReturn venueEntity
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
        verify(venueRepository).getVenueById(venueEntity.id)
    }

    @Test
    internal fun `should call getCityById`() {
        subject.getVenue(venueEntity.id)
        verify(cityService).getCityById(expected.city.id)

    }
}