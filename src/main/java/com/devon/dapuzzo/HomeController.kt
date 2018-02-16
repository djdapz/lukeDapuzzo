package com.devon.dapuzzo

import com.devon.dapuzzo.config.UrlConfig
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Created by devondapuzzo on 7/17/17.
 */

@Controller
class HomeController(val urlConfig: UrlConfig) {

    @RequestMapping(value = ["/", "/media", "/show", "/music", "/bio", "/contact", "/admin"])
    fun index(model: Model): String {
        model.addAttribute("clientUrl", urlConfig.clientUrl())
        return "index"
    }
}