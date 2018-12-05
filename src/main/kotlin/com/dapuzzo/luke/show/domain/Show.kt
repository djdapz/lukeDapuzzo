package com.dapuzzo.luke.show.domain

import java.time.LocalDate

data class Show(
        val id: Int,
        val date: LocalDate,
        val notes: String,
        val venue: Venue
)