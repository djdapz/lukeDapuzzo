package com.dapuzzo.luke.config

import com.dapuzzo.luke.security.JwtValidator
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import javax.servlet.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
class SecurityFilter(@Value("\${dapuzzo.luke.whitelist}") rawWhitelist: String, val jwtValidator: JwtValidator) :
    Filter {

    val whitelist = rawWhitelist.split(",").map { it.trim() }

    fun doesntNeedSecurity(request: HttpServletRequest): Boolean =
        when {
            request.method == "GET" -> true
            request.method == "OPTIONS" -> true
            request.servletPath in whitelist -> true
            else -> false
        }

    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        val req = request as HttpServletRequest
        val res = response as HttpServletResponse

        if (doesntNeedSecurity(request)) {
            chain.doFilter(request, response)
            return
        }
        val authHeader = request.getHeader("Authorization")

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            res.status = 401
            return
        }

        val token = authHeader.replace("Bearer ", "")

        if (jwtValidator.isValid(token)) {
            chain.doFilter(req, res)
        } else {
            res.status = 401
        }
    }

    override fun init(filterConfig: FilterConfig?) {}
    override fun destroy() {}
}