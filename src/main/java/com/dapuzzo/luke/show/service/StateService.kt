package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.State
import com.dapuzzo.luke.show.repository.StateRepository
import org.springframework.stereotype.Service

@Service
class StateService(
        val stateRepository: StateRepository
) {
    fun getState(abbreviation: String): State =
            with(stateRepository.getById(abbreviation)) {
                State(
                        abbreviation = abbreviation,
                        name = name
                )
            }

}


