package com.dapuzzo.luke.bio

import com.dapuzzo.luke.core.Cleanup
import com.dapuzzo.luke.core.DatabaseBase
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

@Cleanup
class BioRepositoryTest : DatabaseBase() {

    @Autowired
    lateinit var subject: BioRepository

    @Test
    fun shouldUpdateRepositoryWithParsedListOfParagraphs() {
        val newBio = listOf("i am a musician", "please stream me on spootify")
        val original = subject.getBio()
        assertThat(original).isNotEqualTo(newBio)

        subject.updateBio(newBio)
        val bio = subject.getBio()

        assertThat(bio).isEqualTo(listOf("i am a musician", "please stream me on spootify"))
    }



    @Test
    fun shouldPlayNiceWithApostrophes() {
        val newBio = listOf("i'm a musician")
        val original = subject.getBio()
        assertThat(original).isNotEqualTo(newBio)

        subject.updateBio(newBio)
        val bio = subject.getBio()

        assertThat(bio).isEqualTo(listOf("i'm a musician"))
    }

    @Test
    fun shouldReturnByDefaultTheMostRecentBioInTheDb() {
        jdbcTemplate.update("INSERT INTO bio (bio) values ('some stuff')")

        val bio = subject.getBio()

        assertThat(bio).isEqualTo(listOf("some stuff"))
    }
}