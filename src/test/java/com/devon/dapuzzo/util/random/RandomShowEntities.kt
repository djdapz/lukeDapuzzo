package com.devon.dapuzzo.util.random

import com.devon.dapuzzo.show.domain.ShowView
import com.devon.dapuzzo.show.domain.entity.CityEntity
import com.devon.dapuzzo.show.domain.entity.ShowEntity
import com.devon.dapuzzo.show.domain.entity.StateEntity
import com.devon.dapuzzo.show.domain.entity.VenueEntity

fun randomShowView(): ShowView =
        ShowView(
                randomInt(),
                randomLocalDate(),
                randomString(),
                randomString(),
                randomString(),
                randomString(),
                randomString()
        )


fun randomShowEntity(): ShowEntity =
        ShowEntity(
                randomInt(),
                randomInt(1),
                randomLocalDate(),
                randomString()

        )


fun randomStateEntity(): StateEntity =
        StateEntity(
                randomString(2),
                randomString(10)
        )


fun randomStateEntity(dependentCity: CityEntity): StateEntity =
        StateEntity(
                dependentCity.stateAbbreviation,
                randomString(10)
        )


fun randomCityEntity(): CityEntity =
        CityEntity(
                randomInt(),
                randomString(2),
                randomString()
        )


fun randomCityEntity(dependentVenue: VenueEntity): CityEntity =
        CityEntity(
                dependentVenue.city_id,
                randomString(2),
                randomString()
        )


fun randomVenueEntity(): VenueEntity =
        VenueEntity(
                randomInt(),
                randomInt(2),
                randomString(),
                randomString()
        )


fun randomVenueEntity(dependentShow: ShowEntity): VenueEntity =
        VenueEntity(
                dependentShow.venueId,
                randomInt(2),
                randomString(),
                randomString()
        )

