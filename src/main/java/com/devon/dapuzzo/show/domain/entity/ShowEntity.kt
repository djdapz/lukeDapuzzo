package com.devon.dapuzzo.show.domain.entity

import com.devon.dapuzzo.show.domain.Show
import java.time.LocalDate

data class ShowEntity(
        val id: Int,
        val venueId: Int,
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