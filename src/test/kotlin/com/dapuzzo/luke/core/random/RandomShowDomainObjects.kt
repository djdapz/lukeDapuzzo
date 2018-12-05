package com.dapuzzo.luke.core.random

import com.dapuzzo.luke.show.domain.City
import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.domain.State
import com.dapuzzo.luke.show.domain.Venue


fun randomShow(): Show =
        Show(
                id = randomInt(),
                venue = randomVenue(),
                date = randomLocalDate(),
                notes = randomString()
        )


fun randomVenue(): Venue = randomVenue(randomInt())

fun randomVenue(venueId: Int): Venue =
        Venue(
                id = venueId,
                city = randomCity(),
                googleMapsLink = randomString(),
                name = randomString()
        )


fun randomState(): State = randomState(randomString())

fun randomState(cityAbbreviation: String): State =
        State(
                abbreviation = cityAbbreviation,
                name = randomString()
        )


fun randomCity(): City = randomCity(randomInt())

fun randomCity(cityId: Int): City =
        City(
                id = cityId,
                state = randomState(),
                name = randomString()
        )





