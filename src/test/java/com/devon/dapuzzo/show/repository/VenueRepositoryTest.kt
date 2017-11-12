package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.BaseRepositoryTest
import com.devon.dapuzzo.core.random.randomVenueEntity
import org.assertj.core.api.Assertions
import org.junit.Test

class VenueRepositoryTest: BaseRepositoryTest(){
    val venueRepository: VenueRepository = VenueRepository(jdbcTemplate)

    var firstVenue = randomVenueEntity()
    var secondVenue = randomVenueEntity()

    override fun setupDependencies() {
        setupVenueDependencies(jdbcTemplate, firstVenue, secondVenue)

        firstVenue =  venueRepository.add(firstVenue)
        secondVenue = venueRepository.add(secondVenue)
    }


    @Test
    internal fun `should get all venues`(){
        val actualStates = venueRepository.getAll()

        Assertions.assertThat(actualStates.size).isEqualTo(2)
        Assertions.assertThat(actualStates).containsExactlyInAnyOrder(firstVenue, secondVenue)
    }

    @Test
    internal fun `should get venue by id`(){
        val actualState = venueRepository.getById(firstVenue.id)

        Assertions.assertThat(actualState).isEqualTo(firstVenue)
    }

}