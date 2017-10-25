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

    @Test
    internal fun `should produce random list between 1 and 5 items long`(){
        val randomList = randomList(LukeRandom::randomInt)

        assertThat(randomList.size).isGreaterThanOrEqualTo(1)
        assertThat(randomList.size).isLessThanOrEqualTo(5)
    }

}