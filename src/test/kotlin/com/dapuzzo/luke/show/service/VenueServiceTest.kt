package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.core.random.randomCity
import com.dapuzzo.luke.core.random.randomInt
import com.dapuzzo.luke.core.random.randomVenueEntity
import com.dapuzzo.luke.show.domain.City
import com.dapuzzo.luke.show.domain.State
import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.domain.entity.VenueEntity
import com.dapuzzo.luke.show.repository.VenueRepository
import com.nhaarman.mockitokotlin2.*
import org.assertj.core.api.Assertions
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test

class VenueServiceTest {
    private val venueEntity = randomVenueEntity()
    private val expected = with(venueEntity) {
        Venue(
                id = id!!,
                city = randomCity(city_id),
                name = name,
                googleMapsLink = googleMapsLink)
    }

    private val venueRepository = mock<VenueRepository> {
        on { getById(any()) } doReturn venueEntity
    }

    private val cityService = mock<CityService> {
        on { getCityById(any()) } doReturn expected.city
    }

    private val subject = VenueService(venueRepository, cityService)

    val cityId = randomInt()
    val newVenueId = randomInt()

    val newCity = City(cityId, "Boulder", State("CO", "Colorado"))

    @Before
    fun setUp() {
        whenever(cityService.searchCity("Boulder", "CO")).thenReturn(null)
        whenever(cityService.newCity("Boulder", "CO")).thenReturn(newCity)
        whenever(venueRepository.add(any())).thenReturn(VenueEntity(newVenueId, cityId, "Beebop", "googl.io"))
    }

    @Test
    fun `should get venue by id`() {
        val actual = subject.getVenue(venueEntity.id!!)
        Assertions.assertThat(actual).isEqualTo(expected)
    }

    @Test
    fun `should call getVenueById`() {
        subject.getVenue(venueEntity.id!!)
        verify(venueRepository).getById(venueEntity.id!!)
    }

    @Test
    fun `should call getCityById`() {
        subject.getVenue(venueEntity.id!!)
        verify(cityService).getCityById(expected.city.id)
    }

    @Test
    fun `should get all venues`() {
        subject.getAllVenues()
        verify(venueRepository).getAll()
    }

    @Test
    fun shouldCreateANewCityIfTheCityDidntExist() {
        whenever(cityService.searchCity("Boulder", "CO")).thenReturn(null)
        whenever(venueRepository.add(any())).thenReturn(VenueEntity(newVenueId, cityId, "Beebop", "googl.io"))

        subject.newVenue("Boulder", "Beebop", "googl.io", "CO")
        verify(cityService).newCity("Boulder", "CO")
    }

    @Test
    fun shouldUseCityIdFromNewCityToCreateAVenue() {
        whenever(cityService.searchCity("Boulder", "CO")).thenReturn(null)
        whenever(cityService.newCity("Boulder", "CO")).thenReturn(newCity)

        subject.newVenue("Boulder", "Beebop", "googl.io", "CO")

        verify(venueRepository).add(VenueEntity(null, cityId, "Beebop", "googl.io"))
    }

    @Test
    fun shouldUseCityIdFromFoundCityToCreateAVenue() {
        subject.newVenue("Boulder", "Beebop", "googl.io", "CO")

        verify(venueRepository).add(VenueEntity(null, cityId, "Beebop", "googl.io"))
    }

    @Test
    fun shouldRetunVenueIdWhenNewVenueIsCreated() {
        val newVenue = subject.newVenue("Boulder", "Beebop", "googl.io", "CO")
        assertThat(newVenue).isEqualTo(newVenueId)
    }
}