package com.devon.dapuzzo.show.domain

import java.time.LocalDate

//@Table(name = "all_shows")
data class ShowView(
        val id: Int,
        val date: LocalDate,
        val venue: String,
        val city: String,
        val state: String,
        val google_maps_link: String,
        val style: String
)