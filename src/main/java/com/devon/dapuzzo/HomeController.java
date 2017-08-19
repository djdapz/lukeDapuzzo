package com.devon.dapuzzo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 * Created by devondapuzzo on 7/17/17.
 */

@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/media", "/shows", "/music", "/bio", "/contact"})
    public String index() {
        return "index";
    }
}