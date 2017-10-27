package com.devon.dapuzzo.show

import com.devon.dapuzzo.util.random.LukeRandom
import com.devon.dapuzzo.util.random.LukeRandom.randomList
import com.devon.dapuzzo.util.random.LukeRandom.randomShow
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import com.nhaarman.mockito_kotlin.whenever
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import java.util.*

open class ShowServiceTest {

    val showRepository: ShowRepository = mock()
    val subject = ShowService(showRepository)
    val expectedShows = randomList(::randomShow)
    val savedShow = randomShow()


    @Before
    fun setUp() {
        whenever(showRepository.findAll()).thenReturn(expectedShows)
        whenever(showRepository.save(any())).thenReturn(savedShow)
    }

    @Test
    internal fun `should return a list of shows on get`() {
        val shows = subject.getAllShows();
        assertThat(shows).containsAll(expectedShows)
    }

    @Test
    internal fun `should call show repository on get`() {
        subject.getAllShows();
        verify(showRepository).findAll()
    }

    @Test
    internal fun `should calL save in show repository on post`(){
        subject.getAllShows();
        verify(showRepository).save(savedShow)
    }

    @Test
    internal fun `should return saved show on post`() {
        val show = subject.createShow(savedShow)
        assertThat(show).isEqualTo(savedShow)
    }

    @Test
    internal fun `should produce random list between 1 and 5 items long`(){
        val randomList = randomList(LukeRandom::randomInt)

        assertThat(randomList.size).isGreaterThanOrEqualTo(1)
        assertThat(randomList.size).isLessThanOrEqualTo(5)
    }

}