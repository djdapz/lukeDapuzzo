package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.Cleanup
import com.dapuzzo.luke.core.DatabaseBase
import com.dapuzzo.luke.core.random.randomVenueEntity
import org.assertj.core.api.Assertions
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

@Cleanup
class VenueRepositoryTest : DatabaseBase (){
    @Autowired
    lateinit var venueRepository: VenueRepository

    var firstVenue = randomVenueEntity()
    var secondVenue = randomVenueEntity()


    @Before
    internal fun setup() {
        ShowRepositoryDependencies(jdbcTemplate).setupVenueDependencies(firstVenue, secondVenue)

        venueRepository.add(firstVenue)
        venueRepository.add(secondVenue)
    }


    @Test
    internal fun `should get all venues`() {
        val actualStates = venueRepository.getAll()

        Assertions.assertThat(actualStates.size).isEqualTo(2)
        Assertions.assertThat(actualStates).containsExactlyInAnyOrder(firstVenue, secondVenue)
    }

    @Test
    internal fun `should get venue by id`() {
        val actualState = venueRepository.getById(firstVenue.id!!)

        Assertions.assertThat(actualState).isEqualTo(firstVenue)
    }
}