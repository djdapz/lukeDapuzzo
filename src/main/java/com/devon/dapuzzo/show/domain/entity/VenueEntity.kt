package com.devon.dapuzzo.show.domain.entity

import com.devon.dapuzzo.show.domain.Venue

data class VenueEntity(
    val id : Int,
    val city_id : Int,
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