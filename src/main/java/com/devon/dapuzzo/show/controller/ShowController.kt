package com.devon.dapuzzo.show.controller

import com.devon.dapuzzo.show.domain.Show
import com.devon.dapuzzo.show.service.ShowService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ShowController(val showService: ShowService) {

    @GetMapping("/api/shows")
    fun shows(): List<Show> {
            return showService.getAllShows()
        }
}

