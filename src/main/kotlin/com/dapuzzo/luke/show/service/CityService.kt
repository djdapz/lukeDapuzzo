package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.City
import com.dapuzzo.luke.show.repository.CityRepository
import org.springframework.stereotype.Service

@Service
class CityService(
        val cityRepository: CityRepository,
        val stateService: StateService
) {
    fun
            getCityById(id: Int): City =
            with(cityRepository.getById(id)) {
                City(
                        id = id,
                        name = name,
                        state = stateService.getState(stateAbbreviation)
                )
            }

}

