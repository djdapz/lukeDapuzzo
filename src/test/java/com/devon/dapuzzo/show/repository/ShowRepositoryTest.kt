package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.util.random.randomShowEntity
import org.assertj.core.api.Assertions.assertThat
import org.flywaydb.core.Flyway
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.springframework.jdbc.datasource.SingleConnectionDataSource


class ShowRepositoryTest {
    val flyway: Flyway = Flyway()
    val dataSource = SingleConnectionDataSource("jdbc:postgresql://localhost:5432/lukedapuzzo", "devondapuzzo", "", true)
    val showRepository: ShowRepository = ShowRepository(dataSource)

    var firstShow = randomShowEntity()
    var secondShow = randomShowEntity()


    @Before
    fun setUp() {
        flyway.dataSource = dataSource
        flyway.migrate()

        setupShowDependencies(dataSource, firstShow, secondShow)

        firstShow = showRepository.add(firstShow)
        secondShow = showRepository.add(secondShow)
    }

    @After
    fun tearDown() {
        flyway.clean()
    }

    @Test
    internal fun `should get all shows from the database`(){
        val actualShows = showRepository.getAllShows()

        assertThat(actualShows.size).isEqualTo(2)
        assertThat(actualShows).containsExactlyInAnyOrder(firstShow, secondShow)
    }

    @Test
    internal fun `should get show from id`(){
        val actualShow = showRepository.getShowById(firstShow.id)

        assertThat(actualShow).isEqualTo(firstShow)
    }
}