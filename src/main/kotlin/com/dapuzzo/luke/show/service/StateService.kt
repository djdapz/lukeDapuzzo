package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.State
import com.dapuzzo.luke.show.repository.StateRepository
import org.springframework.stereotype.Service

@Service
class StateService(
        val stateRepository: StateRepository
) {
    fun getState(abbreviation: String): State =
            stateRepository.getById(abbreviation)!!.run {
                State(
                        abbreviation = abbreviation,
                        name = name
                )
            }

}


