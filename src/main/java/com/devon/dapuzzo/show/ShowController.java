package com.devon.dapuzzo.show;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Value
@RestController
@AllArgsConstructor
public class ShowController {

    ShowService showService;

    @GetMapping( "/api/shows")
    public ResponseEntity getShows() throws JsonProcessingException {
        List<Show> shows = showService.getAllShows();
        return ResponseEntity.ok().body(shows);
    }
}

