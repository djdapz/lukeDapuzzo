package com.devon.dapuzzo.show

import lombok.AllArgsConstructor
import org.springframework.stereotype.Service

import java.util.ArrayList
import java.util.function.Consumer

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Service
open class ShowService(val showRepository: ShowRepository) {
    fun getAllShows(): List<Show> {
            val showIterable = showRepository.findAll()
            val shows = ArrayList<Show>()
            showIterable.map { shows.add(it) };
            return shows
        }
}
