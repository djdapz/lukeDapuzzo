package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.show.domain.Venue
import com.dapuzzo.luke.show.service.VenueService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
class VenueController(val venueService: VenueService) {

    data class VenuesResponseBody(val venues: List<Venue>)
    data class NewVenueRequestBody(val city: String, val name: String, val googleMapsLink: String, val state: String)

    @GetMapping("/venues")
    fun venues() = VenuesResponseBody(venueService.getAllVenues())


    @PostMapping("/venues")
    @ResponseStatus(HttpStatus.CREATED)
    fun newVenue(@RequestBody newVenue: NewVenueRequestBody) = venueService.newVenue(
             newVenue.city,  newVenue.name,  newVenue.googleMapsLink,  newVenue.state
    )
}