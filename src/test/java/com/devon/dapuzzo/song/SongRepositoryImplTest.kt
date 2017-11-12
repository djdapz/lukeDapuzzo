package com.devon.dapuzzo.song

import com.devon.dapuzzo.core.BaseRepositoryTest
import com.devon.dapuzzo.core.random.randomSongEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class SongRepositoryImplTest : BaseRepositoryTest() {

    val subject: SongRepository = SongRepositoryImpl(jdbcTemplate)

    val firstSong = randomSongEntity()
    val secondSong = randomSongEntity()

    override fun setupDependencies() {
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

}