package com.devon.dapuzzo.show.domain.entity

import com.devon.dapuzzo.show.domain.State

data class StateEntity(
        val abbreviation: String,
        val name: String
){
    constructor(state: State) : this(
            state.abbreviation,
            state.name
    )
}