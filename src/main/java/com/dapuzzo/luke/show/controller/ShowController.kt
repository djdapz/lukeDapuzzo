package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.service.ShowService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ShowController(val showService: ShowService) {

    @GetMapping("/api/shows")
    fun shows(): List<Show> {
            return showService.getAllShows()
        }
}

