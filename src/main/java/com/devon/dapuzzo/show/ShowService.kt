package com.devon.dapuzzo.show

import lombok.AllArgsConstructor
import org.springframework.stereotype.Service

import java.util.ArrayList
import java.util.function.Consumer

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Service
@AllArgsConstructor
open class ShowService(val showRepository: ShowRepository) {
    val allShows: List<Show>
        get() {
            val showIterable = showRepository.findAll()
            val shows = ArrayList<Show>()
            showIterable.map { shows.add(it) };
            return shows
        }
}
