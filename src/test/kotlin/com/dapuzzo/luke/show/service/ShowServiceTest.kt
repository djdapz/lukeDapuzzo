package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.core.random.randomShowEntity
import com.dapuzzo.luke.core.random.randomVenue
import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.repository.ShowRepository
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions
import org.junit.Test

open class ShowServiceTest {


    private val showEntity = randomShowEntity()
    private val expected = Show(
            id= showEntity.id!!,
            venue = randomVenue(showEntity.venueId),
            notes = showEntity.notes,
            date = showEntity.date
    )

    private val showRepository = mock<ShowRepository> {
        on { getById(any()) } doReturn showEntity
    }

    private val venueService = mock<VenueService>{
        on { getVenue(any())} doReturn expected.venue
    }

    private val subject = ShowService(showRepository, venueService)


    @Test
    internal fun `should get show by id`() {
        val actual = subject.getShow(showEntity.id!!)
        Assertions.assertThat(actual).isEqualTo(expected)
    }

    @Test
    internal fun `should call getCityByID`(){
        subject.getShow(showEntity.id!!)
        verify(showRepository).getById(showEntity.id!!)
    }

    @Test
    internal fun `should call getState`(){
        subject.getShow(showEntity.id!!)
        verify(venueService).getVenue(expected.venue.id)
    }

    @Test
    fun shouldDeleteSong(){
        subject.deleteShow(123)
        verify(showRepository).delete(123)
    }

}