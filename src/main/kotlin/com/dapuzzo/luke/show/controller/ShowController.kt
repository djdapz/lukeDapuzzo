package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.service.ShowService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class ShowController(val showService: ShowService) {

    @GetMapping("/shows")
    fun shows(): List<Show> = showService.getAllShows()

    @DeleteMapping("/shows/{id}")
    fun delete(@PathVariable id: Int) = showService.deleteShow(id)

}

