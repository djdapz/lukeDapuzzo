package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.BaseRepositoryTest
import com.dapuzzo.luke.core.random.randomSongEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

class SongRepositoryImplTest : BaseRepositoryTest() {

    @Autowired
    lateinit var subject: SongRepository

    val firstSong = randomSongEntity()
    val secondSong = randomSongEntity()

    @Before
    fun setupDependencies() {
        subject.add(firstSong)
        subject.add(secondSong)
    }

    @Test
    internal fun `should retrieve all items from repository`() {
        val songs = subject.getAll()
        assertThat(songs).containsExactlyInAnyOrder(firstSong, secondSong)
    }

    @Test
    internal fun `should retrivie item by id from repository`() {
        val song = subject.getById(firstSong.id)
        assertThat(song).isEqualTo(firstSong)
    }

    @Test
    internal fun `should delete song from repository`(){
        subject.delete(firstSong.id)
        val songs = subject.getAll()
        assertThat(songs).containsExactlyInAnyOrder(secondSong)
        assertThat(songs).doesNotContain(firstSong)
    }

}