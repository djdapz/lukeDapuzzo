package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.random.randomCityEntity
import com.dapuzzo.luke.core.random.randomStateEntity
import com.dapuzzo.luke.core.random.randomVenueEntity
import com.dapuzzo.luke.show.domain.entity.CityEntity
import com.dapuzzo.luke.show.domain.entity.ShowEntity
import com.dapuzzo.luke.show.domain.entity.StateEntity
import com.dapuzzo.luke.show.domain.entity.VenueEntity
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Component


@Component
class ShowRepositoryDependencies(
        val stateRepository: StateRepository,
        val cityRepository: CityRepository,
        val venueRepository: VenueRepository,
        val showRepository: ShowRepository
) {

    private fun setupState(firstState: StateEntity, secondState: StateEntity) {
        stateRepository.add(firstState)
        stateRepository.add(secondState)
    }


    private fun setupCity(firstCity: CityEntity, secondCity: CityEntity) {
        setupCityDependencies(firstCity, secondCity)

        cityRepository.add(firstCity)
        cityRepository.add(secondCity)
    }

    private fun setupVenue(firstVenue: VenueEntity, secondVenue: VenueEntity) {
        setupVenueDependencies(firstVenue, secondVenue)

        venueRepository.add(firstVenue)
        venueRepository.add(secondVenue)
    }

    fun setupShow(firstShow: ShowEntity, secondShow: ShowEntity) {
        setupShowDependencies(firstShow, secondShow)
        showRepository.add(firstShow)
        showRepository.add(secondShow)

    }

    fun setupShowDependencies(firstShow: ShowEntity, secondShow: ShowEntity) {

        val firstVenue = randomVenueEntity()
        val secondVenue = randomVenueEntity()

        setupVenue(firstVenue, secondVenue)

        firstShow.venueId = firstVenue.id
        secondShow.venueId = secondVenue.id

        setupVenue(randomVenueEntity(firstShow), randomVenueEntity(secondShow))
    }


    fun setupVenueDependencies(firstVenue: VenueEntity, secondVenue: VenueEntity) {
        val firstCity = randomCityEntity()
        val secondCity = randomCityEntity()

        setupCity(firstCity, secondCity)

        firstVenue.city_id = firstCity.id
        secondVenue.city_id = secondCity.id
    }

    fun setupCityDependencies(firstCity: CityEntity, secondCity: CityEntity) {
        setupState(randomStateEntity(firstCity), randomStateEntity(secondCity))
    }


}
