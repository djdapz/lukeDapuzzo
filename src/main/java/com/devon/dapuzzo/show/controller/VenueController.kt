package com.devon.dapuzzo.show.controller

import com.devon.dapuzzo.show.domain.Venue
import com.devon.dapuzzo.show.service.VenueService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class VenueController(val venueService: VenueService) {

    @GetMapping("/api/venues")
    fun shows(): List<Venue> {
        return venueService.getAllVenues()
    }
}