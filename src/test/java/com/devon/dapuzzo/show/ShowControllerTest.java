package com.devon.dapuzzo.show;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.devon.dapuzzo.util.random.Random.randomShow;
import static org.mockito.Matchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class ShowControllerTest {


    private ShowController controller;
    private ShowService mockShowService;
    private MockMvc mockMvc;

    private List<Show> expectedList = new ArrayList<>();

    @Before
    public void setup() {
        mockShowService = mock(ShowService.class);

        controller = new ShowController(mockShowService);

        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

        expectedList.clear();
        expectedList.add(randomShow());
        expectedList.add(randomShow());
        when(mockShowService.getAllShows()).thenReturn(expectedList);
    }

    @Test
    public void shouldRequestCorrectMapping() throws Exception {
        mockMvc
            .perform(get("/api/shows"))
            .andExpect(status().isOk());
    }


    @Test
    public void shouldDelegateToShowService() throws Exception {
        mockMvc.perform(get("/api/shows"));
        verify(mockShowService).getAllShows();
    }
}