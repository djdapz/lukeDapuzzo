package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.util.random.randomVenueEntity
import org.assertj.core.api.Assertions
import org.flywaydb.core.Flyway
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.springframework.jdbc.datasource.SingleConnectionDataSource

class VenueRepositoryTest{

    val flyway: Flyway = Flyway()
    val dataSource = SingleConnectionDataSource("jdbc:postgresql://localhost:5432/lukedapuzzo", "devondapuzzo", "", true)
    val venueRepository: VenueRepository = VenueRepository(dataSource)

    var firstVenue = randomVenueEntity()
    var secondVenue = randomVenueEntity()


    @Before
    fun setUp() {
        flyway.dataSource = dataSource
        flyway.migrate()


        setupVenueDependencies(dataSource, firstVenue, secondVenue)

        firstVenue =  venueRepository.add(firstVenue)
        secondVenue = venueRepository.add(secondVenue)
    }

    @After
    fun tearDown() {
        flyway.clean()
    }

    @Test
    internal fun `should get all venues`(){
        val actualStates = venueRepository.getAllVenues()

        Assertions.assertThat(actualStates.size).isEqualTo(2)
        Assertions.assertThat(actualStates).containsExactlyInAnyOrder(firstVenue, secondVenue)
    }

    @Test
    internal fun `should get venue by id`(){
        val actualState = venueRepository.getVenueById(firstVenue.id)

        Assertions.assertThat(actualState).isEqualTo(firstVenue)
    }

}