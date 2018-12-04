package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.City
import com.dapuzzo.luke.show.domain.entity.CityEntity
import com.dapuzzo.luke.show.repository.CityRepository
import org.springframework.stereotype.Service

@Service
class CityService(
        val cityRepository: CityRepository,
        val stateService: StateService
) {
    fun getCityById(id: Int): City? =
            cityRepository.getById(id)?.run {
                City(
                        id = id,
                        name = name,
                        state = stateService.getState(stateAbbreviation)
                )
            }


    fun newCity(cityName: String, state: String): City = cityRepository
            .add(CityEntity(null, state, cityName))
            .run { City(this.id!!, this.name, stateService.getState(stateAbbreviation)) }

    fun searchCity(city: String, state: String): City? = cityRepository
            .getCityByStateAndName(city, state)?.run {
                City(this.id!!, this.name, stateService.getState(state))
            }
}
