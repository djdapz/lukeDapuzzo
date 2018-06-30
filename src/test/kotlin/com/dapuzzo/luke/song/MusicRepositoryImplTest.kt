package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.Cleanup
import com.dapuzzo.luke.core.DatabaseBase
import com.dapuzzo.luke.core.random.randomSongEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

@Cleanup
class MusicRepositoryImplTest : DatabaseBase (){

    @Autowired
    lateinit var subject: MusicRepository

    val firstSong = randomSongEntity()
    val secondSong = randomSongEntity()

    @Before
    fun setupDependencies() {
        subject.add(firstSong)
        subject.add(secondSong)
    }

    @Test
    internal fun `should retrieve all items from repository`() {
        subject.getAll().also {
            assertThat(it).containsExactlyInAnyOrder(firstSong, secondSong)
        }

    }

    @Test
    internal fun `should retrivie item by id from repository`() {
        subject.getById(firstSong.id).also {
            assertThat(it).isEqualTo(firstSong)
        }

    }

    @Test
    internal fun `should delete song from repository`() {
        subject.delete(firstSong.id)
        subject.getAll().also {
            assertThat(it).doesNotContain(firstSong)
            assertThat(it).containsExactlyInAnyOrder(secondSong)
        }
    }
}