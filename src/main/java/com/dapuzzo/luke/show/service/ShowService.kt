package com.dapuzzo.luke.show.service

import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.repository.ShowRepository
import org.springframework.stereotype.Service

@Service
class ShowService(
        val showRepository: ShowRepository,
        val venueService: VenueService
) {
    fun getAllShows(): List<Show> {
        return showRepository
                .getAll()
                .map {
                    Show(
                            id = it.id,
                            venue = venueService.getVenue(it.venueId),
                            style = it.style,
                            date = it.date

                    )
                }
    }


    fun getShow(id: Int): Show = with(showRepository.getById(id)) {
        Show(
                id = id,
                venue = venueService.getVenue(venueId),
                style = style,
                date = date
        )
    }

}
