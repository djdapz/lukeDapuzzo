package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.BaseRepositoryTest
import com.devon.dapuzzo.core.random.randomStateEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired


class StateRepositoryTest : BaseRepositoryTest() {
    @Autowired
    lateinit var stateRepository: StateRepository

    val firstState = randomStateEntity()
    val secondState = randomStateEntity()

    @Before
    internal fun setupDependencies() {
        stateRepository.add(firstState)
        stateRepository.add(secondState)
    }

    @Test
    internal fun `should get all states`() {
        val actualStates = stateRepository.getAll()

        assertThat(actualStates.size).isEqualTo(2)
        assertThat(actualStates).containsExactlyInAnyOrder(firstState, secondState)
    }

    @Test
    internal fun `should get state by abbreviation`() {
        val actualState = stateRepository.getById(firstState.abbreviation)

        assertThat(actualState).isEqualTo(firstState)
    }
}