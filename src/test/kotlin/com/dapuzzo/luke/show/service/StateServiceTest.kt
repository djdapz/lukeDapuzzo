package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.core.random.randomStateEntity
import com.dapuzzo.luke.show.domain.State
import com.dapuzzo.luke.show.repository.StateRepository
import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.doReturn
import com.nhaarman.mockitokotlin2.mock
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class StateServiceTest{

    val stateEntity = randomStateEntity()
    val expected = State(
            abbreviation = stateEntity.abbreviation,
            name = stateEntity.name)

    val stateRepository  = mock<StateRepository> {
        on { getById(any()) } doReturn stateEntity
    }
    val subject = StateService(stateRepository)


    @Test
    internal fun `should get state by abbreviation`(){
        val actual = subject.getState(stateEntity.abbreviation)
        assertThat(actual).isEqualTo(expected)
    }
}