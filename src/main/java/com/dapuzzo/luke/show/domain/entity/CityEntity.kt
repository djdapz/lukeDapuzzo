package com.dapuzzo.luke.show.domain.entity

import com.dapuzzo.luke.show.domain.City

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