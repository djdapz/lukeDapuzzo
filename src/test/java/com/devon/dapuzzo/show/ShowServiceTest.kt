package com.devon.dapuzzo.show

import com.devon.dapuzzo.util.random.LukeRandom
import com.devon.dapuzzo.util.random.LukeRandom.randomList
import com.devon.dapuzzo.util.random.LukeRandom.randomShow
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import com.nhaarman.mockito_kotlin.whenever
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import java.util.*


/**
 * Created by devondapuzzo on 10/24/17.
 */
class ShowServiceTest {

    val showRepository: ShowRepository = mock()
    val subject = ShowService(showRepository)
    val expectedShows = randomList(::randomShow);


    @Before
    fun setUp() {
        whenever(showRepository.findAll()).thenReturn(expectedShows)
    }

    @Test
    internal fun `should return a list of shows`() {
        val shows = subject.getAllShows();
        assertThat(shows).containsAll(expectedShows)
    }

    @Test
    internal fun `should call show repository`() {
        subject.getAllShows();
        verify(showRepository).findAll()
    }
}