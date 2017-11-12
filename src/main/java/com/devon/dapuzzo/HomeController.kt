package com.devon.dapuzzo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Created by devondapuzzo on 7/17/17.
 */

@Controller
class HomeController {

    @RequestMapping(value = *arrayOf("/", "/media", "/shows", "/music", "/bio", "/contact", "/admin"))
    fun index(): String {
        return "index"
    }
}