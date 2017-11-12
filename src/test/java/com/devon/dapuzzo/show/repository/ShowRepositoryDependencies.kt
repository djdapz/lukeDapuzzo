package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.random.randomCityEntity
import com.devon.dapuzzo.core.random.randomStateEntity
import com.devon.dapuzzo.core.random.randomVenueEntity
import com.devon.dapuzzo.show.domain.entity.CityEntity
import com.devon.dapuzzo.show.domain.entity.ShowEntity
import com.devon.dapuzzo.show.domain.entity.StateEntity
import com.devon.dapuzzo.show.domain.entity.VenueEntity
import org.springframework.jdbc.core.JdbcTemplate

internal fun setupState(jdbcTemplate: JdbcTemplate,
                        firstState: StateEntity,
                        secondState: StateEntity) {
    val stateRepository = StateRepository(jdbcTemplate)
    stateRepository.add(firstState)
    stateRepository.add(secondState)
}


internal fun setupCity(jdbcTemplate: JdbcTemplate,
                       firstCity: CityEntity,
                       secondCity: CityEntity) {
    setupCityDependencies(jdbcTemplate, firstCity, secondCity)

    val cityRepository = CityRepository(jdbcTemplate)
    cityRepository.add(firstCity)
    cityRepository.add(secondCity)
}

internal fun setupVenue(jdbcTemplate: JdbcTemplate,
                        firstVenue: VenueEntity,
                        secondVenue: VenueEntity) {
    setupVenueDependencies(jdbcTemplate, firstVenue, secondVenue)

    val venueRepository = VenueRepository(jdbcTemplate)
    venueRepository.add(firstVenue)
    venueRepository.add(secondVenue)
}


internal fun setupShowDependencies(jdbcTemplate: JdbcTemplate,
                                   firstShow: ShowEntity,
                                   secondShow: ShowEntity) {
    setupVenue(jdbcTemplate, randomVenueEntity(firstShow), randomVenueEntity(secondShow))
}


internal fun setupVenueDependencies(jdbcTemplate: JdbcTemplate,
                                    firstVenue: VenueEntity,
                                    secondVenue: VenueEntity) {
    setupCity(jdbcTemplate, randomCityEntity(firstVenue), randomCityEntity(secondVenue))
}

internal fun setupCityDependencies(jdbcTemplate: JdbcTemplate,
                                   firstCity: CityEntity,
                                   secondCity: CityEntity) {
    setupState(jdbcTemplate, randomStateEntity(firstCity), randomStateEntity(secondCity))
}


