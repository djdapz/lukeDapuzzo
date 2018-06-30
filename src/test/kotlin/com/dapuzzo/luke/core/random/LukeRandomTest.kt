package com.dapuzzo.luke.core.random

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by devondapuzzo on 10/25/17.
 */
class LukeRandomTest{
    @Test
    internal fun `should produce random list between 1 and 5 items long`(){
        val randomList = randomList(::randomInt)

        assertThat(randomList.size).isGreaterThanOrEqualTo(1)
        assertThat(randomList.size).isLessThanOrEqualTo(5)
    }
}
