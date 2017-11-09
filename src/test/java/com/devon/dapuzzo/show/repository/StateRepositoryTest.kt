package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.util.random.randomStateEntity
import org.assertj.core.api.Assertions.assertThat
import org.flywaydb.core.Flyway
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.springframework.jdbc.datasource.SingleConnectionDataSource


class StateRepositoryTest {

    val flyway: Flyway = Flyway()
    val dataSource = SingleConnectionDataSource("jdbc:postgresql://localhost:5432/lukedapuzzo", "devondapuzzo", "", true)
    val stateRepository: StateRepository = StateRepository(dataSource)

    val firstState = randomStateEntity()
    val secondState = randomStateEntity()


    @Before
    fun setUp() {
        flyway.dataSource = dataSource
        flyway.migrate()

        setupState(dataSource, firstState  , secondState)
    }

    @After
    fun tearDown() {
        flyway.clean()
    }

    @Test
    internal fun `should get all states`(){
        val actualStates = stateRepository.getAllStates()

        assertThat(actualStates.size).isEqualTo(2)
        assertThat(actualStates).containsExactlyInAnyOrder(firstState, secondState)
    }

    @Test
    internal fun `should get state by abbreviation`(){
        val actualState = stateRepository.getStateByAbbreviation(firstState.abbreviation)

        assertThat(actualState).isEqualTo(firstState)
    }
}