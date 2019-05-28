package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.random.randomSongEntity
import com.nhaarman.mockitokotlin2.doReturn
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import java.util.*


class MusicServiceTest {

    private val firstSong = randomSongEntity()
    private val secondSong = randomSongEntity()


    private val allSongs = Arrays.asList(
            firstSong,
            secondSong
    )
    private val songRepository = mock<MusicRepository> {
        on { getAll() } doReturn allSongs
        on { add(firstSong) } doReturn firstSong
        on { getById(firstSong.id) } doReturn firstSong
    }

    val subject = MusicService(songRepository)


    @Test
    internal fun `should get all songs`() {
        val songs = subject.getAllMusic()
        assertThat(songs).containsExactlyInAnyOrder(firstSong, secondSong)
        verify(songRepository).getAll()
    }

    @Test
    internal fun `should get song by id`() {
        val song = subject.getMusicById(firstSong.id)
        assertThat(song).isEqualTo(firstSong)
        verify(songRepository).getById(firstSong.id)
    }

    @Test
    internal fun `should add song to repository`() {
        val song = subject.createMusic(firstSong)
        assertThat(song).isEqualTo(firstSong)
        verify(songRepository).add(firstSong)
    }

    @Test
    internal fun `should delete song from repository`() {
        subject.delete(firstSong.id)
        verify(songRepository).delete(firstSong.id)
    }
}



