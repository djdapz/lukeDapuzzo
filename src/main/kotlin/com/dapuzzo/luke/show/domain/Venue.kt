package com.dapuzzo.luke.show.domain

data class Venue(
        val id : Int,
        val name: String,
        val googleMapsLink: String,
        val city : City
)