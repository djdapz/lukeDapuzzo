package com.dapuzzo.luke.show.domain.entity

import com.dapuzzo.luke.show.domain.Venue

data class VenueEntity(
    var id : Int?,
    var city_id : Int,
    val name: String,
    val googleMapsLink: String
) {
    constructor(venue: Venue) : this(
            venue.id,
            venue.city.id,
            venue.name,
            venue.googleMapsLink
    )
}