package com.dapuzzo.luke.core

import com.dapuzzo.luke.core.random.faker
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import kotlin.test.fail

class ResultTest {
    @Test
    fun shouldCreateSuccess() {
        val body = "we did it"
        val result = Success(body)

        result.execute(
                { assertThat(it).isEqualTo(body) },
                { fail() }
        )
    }

    @Test
    fun shouldCreateFailure() {
        val body = faker().harryPotter().quote()
        val result = Failure(body)

        result.execute(
                { fail() },
                { assertThat(it).isEqualTo(body) }
        )
    }

    @Test
    fun shouldReturnBodyOnSuccess() {
        val body = "we did it"
        val result = Success(body)

        val actual = result.getOrThrow(RuntimeException(faker().shakespeare().asYouLikeItQuote()))

        assertThat(actual).isEqualTo(body)
    }

    @Test(expected = RuntimeException::class)
    fun shouldThrowExceptionOnFailureWhenGetOrThrowIsCalled() {
        val body = "we failed it"
        val result = Failure(body)

        result.getOrThrow(RuntimeException("You suck"))
    }
}


