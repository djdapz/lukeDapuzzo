package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.repository.VenueRepository
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

    fun getAllVenues(): List<Venue> = venueRepository.getAll().map {
        Venue(
                id = it.id,
                name = it.name,
                googleMapsLink = it.googleMapsLink,
                city = cityService.getCityById(it.city_id)
        )
    }
}

