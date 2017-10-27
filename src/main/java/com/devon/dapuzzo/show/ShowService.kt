package com.devon.dapuzzo.show

import org.springframework.stereotype.Service
import java.util.*

@Service
open class ShowService(val showRepository: ShowRepository) {
    fun getAllShows(): List<Show> {
            val showIterable = showRepository.findAll()
            val shows = ArrayList<Show>()
        showIterable.map { shows.add(it) }
        return shows
        }

    fun createShow(show: Show): Show {
        return Show()
    }
}
