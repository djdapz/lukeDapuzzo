package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.show.domain.entity.CityEntity
import com.devon.dapuzzo.show.domain.entity.ShowEntity
import com.devon.dapuzzo.show.domain.entity.StateEntity
import com.devon.dapuzzo.show.domain.entity.VenueEntity
import com.devon.dapuzzo.util.random.randomCityEntity
import com.devon.dapuzzo.util.random.randomStateEntity
import com.devon.dapuzzo.util.random.randomVenueEntity
import org.springframework.jdbc.datasource.SingleConnectionDataSource

internal fun setupState(dataSource: SingleConnectionDataSource,
                        firstState: StateEntity,
                        secondState: StateEntity) {
    val stateRepository = StateRepository(dataSource)
    stateRepository.add(firstState)
    stateRepository.add(secondState)
}


internal fun setupCity(dataSource: SingleConnectionDataSource,
                       firstCity: CityEntity,
                       secondCity: CityEntity) {
    setupCityDependencies(dataSource, firstCity, secondCity)

    val cityRepository = CityRepository(dataSource)
    cityRepository.add(firstCity)
    cityRepository.add(secondCity)
}

internal fun setupVenue(dataSource: SingleConnectionDataSource,
                        firstVenue: VenueEntity,
                        secondVenue: VenueEntity) {
    setupVenueDependencies(dataSource, firstVenue, secondVenue)

    val venueRepository = VenueRepository(dataSource)
    venueRepository.add(firstVenue)
    venueRepository.add(secondVenue)
}


internal fun setupShowDependencies(dataSource: SingleConnectionDataSource,
                                   firstShow: ShowEntity,
                                   secondShow: ShowEntity) {
    setupVenue(dataSource, randomVenueEntity(firstShow), randomVenueEntity(secondShow))
}


internal fun setupVenueDependencies(dataSource: SingleConnectionDataSource,
                                    firstVenue: VenueEntity,
                                    secondVenue: VenueEntity) {
    setupCity(dataSource, randomCityEntity(firstVenue), randomCityEntity(secondVenue))
}

internal fun setupCityDependencies(dataSource: SingleConnectionDataSource,
                                   firstCity: CityEntity,
                                   secondCity: CityEntity) {
    setupState(dataSource, randomStateEntity(firstCity), randomStateEntity(secondCity))
}


