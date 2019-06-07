package com.dapuzzo.luke.config

import com.dapuzzo.luke.security.JwtValidator
import com.nhaarman.mockitokotlin2.*
import org.junit.Before
import org.junit.Test
import org.mockito.ArgumentMatchers.anyString
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class SecurityFilterTest {

    private val whitelist = "/my-allowed-endpoint, /another-allowed-endpoint, /first/then-allowed"
    private val jwtValidator = mock<JwtValidator>()

    private val subject = SecurityFilter(whitelist, jwtValidator)

    private val request = mock<HttpServletRequest>()
    private val response = mock<HttpServletResponse>()
    private val filterChain = mock<FilterChain>()

    private val token = "I_AM_A_VALID_TOKEN"

    @Before
    fun setUp() {
        whenever(jwtValidator.isValid(anyString())).thenReturn(false)
    }

    @Test
    fun shouldAllowCallsOnWhitelist() {
        whenever(request.method).doReturn("POST")
        whenever(request.servletPath).doReturn("/my-allowed-endpoint")

        subject.doFilter(request, response, filterChain)

        verify(filterChain).doFilter(request, response)
    }


    @Test
    fun shouldNotAllowCallsThatPartiallyMatchTheWhilelist() {
        whenever(request.method).doReturn("POST")
        whenever(request.servletPath).doReturn("/first")

        subject.doFilter(request, response, filterChain)
        verifyZeroInteractions(filterChain)
    }

    @Test
    fun shouldLetThroughAllGETRequests() {
        whenever(request.method).doReturn("GET")
        whenever(request.servletPath).doReturn("/random-new-endpoint")

        subject.doFilter(request, response, filterChain)
        verify(filterChain).doFilter(request, response)
    }

    @Test
    fun shouldLetThroughAllOptionsRequests() {
        whenever(request.method).doReturn("OPTIONS")
        whenever(request.servletPath).doReturn("/random-new-endpoint")

        subject.doFilter(request, response, filterChain)
        verify(filterChain).doFilter(request, response)
    }

    @Test
    fun shouldNotAllowCallsOffWhitelist() {
        whenever(request.method).doReturn("POST")
        whenever(request.servletPath).doReturn("/some-other-website")

        subject.doFilter(request, response, filterChain)
        verifyZeroInteractions(filterChain)
    }

    @Test
    fun shouldLetACallThroughIfItHasAValidBearerToken() {
        whenever(request.method).doReturn("POST")
        whenever(request.servletPath).doReturn("/some-other-website")
        whenever(request.getHeader("Authorization")).doReturn("Bearer $token")
        whenever(jwtValidator.isValid(token)).thenReturn(true)

        subject.doFilter(request, response, filterChain)

        verify(filterChain).doFilter(request, response)
    }

    @Test
    fun shouldNotLetACallThroughIfTheHeaderDoesNotHaveBearer() {
        whenever(request.method).doReturn("POST")
        whenever(request.servletPath).doReturn("/some-other-website")
        whenever(request.getHeader("Authorization")).doReturn(token)
        whenever(jwtValidator.isValid(token)).thenReturn(true)

        subject.doFilter(request, response, filterChain)

        verifyZeroInteractions(filterChain)
    }
}