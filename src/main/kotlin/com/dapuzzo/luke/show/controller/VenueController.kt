package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.service.VenueService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class VenueController(val venueService: VenueService) {

    data class VenuesResponseBody(val venues: List<Venue>)

    @GetMapping("/venues")
    fun venues() = VenuesResponseBody(venueService.getAllVenues())
}