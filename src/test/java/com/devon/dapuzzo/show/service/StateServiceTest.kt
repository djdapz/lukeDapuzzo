package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.core.random.randomStateEntity
import com.devon.dapuzzo.show.domain.State
import com.devon.dapuzzo.show.repository.StateRepository
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
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