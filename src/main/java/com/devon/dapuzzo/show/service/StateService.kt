package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.show.domain.State
import com.devon.dapuzzo.show.repository.StateRepository
import org.springframework.stereotype.Service

@Service
class StateService(
        val stateRepository: StateRepository
) {
    fun getState(abbreviation: String): State =
            with(stateRepository.getStateByAbbreviation(abbreviation)) {
                State(
                        abbreviation = abbreviation,
                        name = name
                )
            }

}


