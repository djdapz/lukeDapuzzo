package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.BaseRepositoryTest
import com.dapuzzo.luke.core.random.randomShowEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired


class ShowRepositoryTest : BaseRepositoryTest() {
    @Autowired
    lateinit var showRepository: ShowRepository

    @Autowired
    lateinit var showRepositoryDependencies: ShowRepositoryDependencies

    var firstShow = randomShowEntity()
    var secondShow = randomShowEntity()

    @Before
    internal fun setupDependencies() {
        showRepositoryDependencies.setupShowDependencies( firstShow, secondShow)

        firstShow = showRepository.add(firstShow)
        secondShow = showRepository.add(secondShow)
    }

    @Test
    internal fun `should get all shows from the database`() {
        val actualShows = showRepository.getAll()

        assertThat(actualShows.size).isEqualTo(2)
        assertThat(actualShows).containsExactlyInAnyOrder(firstShow, secondShow)
    }

    @Test
    internal fun `should get show from id`() {
        val actualShow = showRepository.getById(firstShow.id)

        assertThat(actualShow).isEqualTo(firstShow)
    }
}