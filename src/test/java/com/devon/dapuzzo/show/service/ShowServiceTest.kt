package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.show.domain.Show
import com.devon.dapuzzo.show.repository.ShowRepository
import com.devon.dapuzzo.util.random.randomShowEntity
import com.devon.dapuzzo.util.random.randomVenue
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions
import org.junit.Test

open class ShowServiceTest {


    val showEntity = randomShowEntity()
    val expected = Show(
            id= showEntity.id,
            venue = randomVenue(showEntity.venueId),
            style = showEntity.style,
            date = showEntity.date
    )

    val showRepository = mock<ShowRepository> {
        on { getShowById(any()) } doReturn showEntity
    }

    val venueService = mock<VenueService>{
        on { getVenue(any())} doReturn expected.venue
    }

    val subject = ShowService(showRepository, venueService)


    @Test
    internal fun `should get show by id`() {
        val actual = subject.getShow(showEntity.id)
        Assertions.assertThat(actual).isEqualTo(expected)
    }

    @Test
    internal fun `should call getCityByID`(){
        subject.getShow(showEntity.id)
        verify(showRepository).getShowById(showEntity.id)
    }

    @Test
    internal fun `should call getState`(){
        subject.getShow(showEntity.id)
        verify(venueService).getVenue(expected.venue.id)

    }

}