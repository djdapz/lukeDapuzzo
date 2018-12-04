package com.dapuzzo.luke.show.controller

import com.dapuzzo.luke.show.domain.Show
import com.dapuzzo.luke.show.service.ShowService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.time.LocalDate

@RestController
class ShowController(val showService: ShowService) {

    data class CreateShowRequest(val date: LocalDate, val venueId: Int, val style: String)

    @GetMapping("/shows")
    fun shows(): List<Show> = showService.getAllShows()

    @DeleteMapping("/shows/{id}")
    fun delete(@PathVariable id: Int) = showService.deleteShow(id)

    @PostMapping("/shows")
    @ResponseStatus(HttpStatus.CREATED)
    fun new(@RequestBody request: CreateShowRequest) = showService.createShow(request.venueId, request.style, request.date)

}

