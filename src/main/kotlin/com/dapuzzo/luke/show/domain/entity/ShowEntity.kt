package com.dapuzzo.luke.show.domain.entity

import com.dapuzzo.luke.show.domain.Show
import java.time.LocalDate

data class ShowEntity(
        var id: Int,
        var venueId: Int,
        val date: LocalDate,
        val style: String
) {
    constructor(show: Show) : this(
            show.id,
            show.venue.id,
            show.date,
            show.style
    )
}