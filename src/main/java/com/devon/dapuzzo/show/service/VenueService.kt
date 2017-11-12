package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.show.domain.Venue
import com.devon.dapuzzo.show.repository.VenueRepository
import org.springframework.stereotype.Service

@Service
class VenueService(
        val venueRepository: VenueRepository,
        val cityService: CityService
) {
    fun getVenue(id: Int): Venue =
            with(venueRepository.getById(id)) {
                Venue(
                        id = id,
                        name = name,
                        googleMapsLink = googleMapsLink,
                        city = cityService.getCityById(city_id)
                )
            }

    fun getAllVenues(): List<Venue> = emptyList()

}

