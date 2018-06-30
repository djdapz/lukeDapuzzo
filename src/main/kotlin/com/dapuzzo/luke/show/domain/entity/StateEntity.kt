package com.dapuzzo.luke.show.domain.entity

import com.dapuzzo.luke.show.domain.State

data class StateEntity(
        val abbreviation: String,
        val name: String
){
    constructor(state: State) : this(
            state.abbreviation,
            state.name
    )
}