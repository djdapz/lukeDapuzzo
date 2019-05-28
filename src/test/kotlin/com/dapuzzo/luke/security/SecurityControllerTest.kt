package com.dapuzzo.luke.security

import com.dapuzzo.luke.config.JsonConfig.Companion.asObject
import com.dapuzzo.luke.core.*
import com.dapuzzo.luke.core.random.faker
import com.dapuzzo.luke.core.random.randomAccount
import com.nhaarman.mockitokotlin2.doReturn
import com.nhaarman.mockitokotlin2.mock
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders

open class SecurityControllerTest {

    private val goodUsername = faker().harryPotter().character()
    private val goodPassword = faker().harryPotter().quote()

    private val badPassword = faker().rickAndMorty().quote()
    private val badUsername = faker().rickAndMorty().character()

    private val account = randomAccount()

    private val securityService = mock<SecurityService> {
        on { login(Credentials(goodUsername, goodPassword)) } doReturn Success(account)
        on { login(Credentials(badUsername, badPassword)) } doReturn Failure(LukeException("Not Authorized"))
        on { createAccount(Credentials(goodUsername, goodPassword)) } doReturn Success(account)
        on { createAccount(Credentials(badUsername, badPassword)) } doReturn Failure(DuplicateKeyException("User already Exists"))
    }

    private val subject = SecurityController(securityService)

    private val mockMvc = MockMvcBuilders.standaloneSetup(subject).build()


    @Test
    internal fun `should return user when login is successful`() {
        val contentAsString = mockMvc.perform(post("/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(credentialsJson(goodUsername, goodPassword)))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actualAccount = asObject(contentAsString, Account::class.java)

        assertThat(actualAccount).isEqualTo(account)
    }

    @Test
    internal fun `should return 401 when login is unsuccessful`() {
        mockMvc.perform(post("/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(credentialsJson(badUsername, badPassword)))
                .andExpect(status().isUnauthorized)
    }

    @Test
    fun shouldCreateAccountWhenUserDoesntExist() {
        val contentAsString = mockMvc.perform(post("/account/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(credentialsJson(goodUsername, goodPassword)))
                .andExpect(status().isOk)
                .andReturn().response.contentAsString

        val actualAccount = asObject(contentAsString, Account::class.java)

        assertThat(actualAccount).isEqualTo(account)
    }

    @Test
    fun shouldFailToCreateAccountWhenUserDoesntExist() {
        val contentAsString = mockMvc.perform(post("/account/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(credentialsJson(badUsername, badPassword)))
                .andExpect(status().isConflict)
                .andReturn().response.contentAsString

        assertThat(contentAsString).isEqualToIgnoringCase("User already Exists")
    }
}

