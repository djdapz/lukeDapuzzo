package com.devon.dapuzzo.show

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.ObjectMapper
import lombok.AllArgsConstructor
import lombok.Value
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Value
@RestController
@AllArgsConstructor
class ShowController(val showService: ShowService) {


    val shows: List<Show>
        @GetMapping("/api/shows") get() {
            return showService.allShows
        }
}

