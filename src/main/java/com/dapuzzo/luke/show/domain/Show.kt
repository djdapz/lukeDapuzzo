package com.dapuzzo.luke.show.domain

import java.time.LocalDate

data class Show(
        val id: Int,
        val date: LocalDate,
        val style: String,
        val venue: Venue
)