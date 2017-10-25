package com.devon.dapuzzo.show

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.ObjectMapper
import lombok.AllArgsConstructor
import lombok.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ShowController(val showService: ShowService) {

    @GetMapping("/api/shows")
    fun shows(): List<Show> {
            return showService.getAllShows()
        }
}

