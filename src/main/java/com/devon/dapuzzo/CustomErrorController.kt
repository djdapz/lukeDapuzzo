package com.devon.dapuzzo

import org.springframework.boot.autoconfigure.web.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by devondapuzzo on 8/20/17.
 */
@Controller
class CustomErrorController : ErrorController {

    @RequestMapping(value = PATH)
    fun error(): String {
        return "index"
    }

    override fun getErrorPath(): String {
        return PATH
    }

    companion object {
        const private val PATH = "/error"
    }
}
