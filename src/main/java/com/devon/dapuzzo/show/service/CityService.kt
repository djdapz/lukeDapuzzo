package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.show.domain.City
import com.devon.dapuzzo.show.repository.CityRepository
import org.springframework.stereotype.Service

@Service
class CityService(
        val cityRepository: CityRepository,
        val stateService: StateService
) {
    fun
            getCityById(id: Int): City =
            with(cityRepository.getCityById(id)) {
                City(
                        id = id,
                        name = name,
                        state = stateService.getState(stateAbbreviation)
                )
            }

}

