package com.devon.dapuzzo.show;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Service
@AllArgsConstructor
public class ShowService {
    ShowRepository showRepository;

    public List<Show> getAllShows(){
        Iterable<Show> showIterable = showRepository.findAll();
        List<Show> shows = new ArrayList<>();
        showIterable.forEach(shows::add);

        return shows;
    }
}
