package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.BaseRepositoryTest
import com.devon.dapuzzo.core.random.randomShowEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


class ShowRepositoryTest : BaseRepositoryTest(){
    val showRepository: ShowRepository = ShowRepository(jdbcTemplate)

    var firstShow = randomShowEntity()
    var secondShow = randomShowEntity()

    override fun setupDependencies() {
        setupShowDependencies(jdbcTemplate, firstShow, secondShow)

        firstShow = showRepository.add(firstShow)
        secondShow = showRepository.add(secondShow)
    }

    @Test
    internal fun `should get all shows from the database`(){
        val actualShows = showRepository.getAll()

        assertThat(actualShows.size).isEqualTo(2)
        assertThat(actualShows).containsExactlyInAnyOrder(firstShow, secondShow)
    }

    @Test
    internal fun `should get show from id`(){
        val actualShow = showRepository.getById(firstShow.id)

        assertThat(actualShow).isEqualTo(firstShow)
    }
}