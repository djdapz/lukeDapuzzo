package com.devon.dapuzzo

import org.springframework.boot.autoconfigure.web.ErrorController
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Created by devondapuzzo on 8/20/17.
 */
//@Controller
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
