package com.devon.dapuzzo.show.domain.entity

import com.devon.dapuzzo.show.domain.City

data class CityEntity(
        var id: Int,
        val stateAbbreviation: String,
        val name: String
) {
    constructor(city: City) : this(
            city.id,
            city.state.abbreviation,
            city.name
    )
}