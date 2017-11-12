package com.devon.dapuzzo.song

import com.devon.dapuzzo.core.random.randomSongEntity
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import java.util.*


class SongServiceTest{

    val firstSong = randomSongEntity()
    val secondSong = randomSongEntity()

    private val songRepository = mock<SongRepository>{
        on { getAll() } doReturn Arrays.asList(firstSong, secondSong)
        on { add(any()) } doReturn firstSong
        on { getById(any()) } doReturn firstSong
    }

    val subject = SongService(songRepository)


    @Test
    internal fun `should get all songs`(){
        val songs = subject.getAllSongs()
        assertThat(songs).containsExactlyInAnyOrder(firstSong, secondSong)
        verify(songRepository).getAll()
    }

    @Test
    internal fun `should get song by id`(){
        val song = subject.getSongById(firstSong.id)
        assertThat(song).isEqualTo(firstSong)
        verify(songRepository).getById(firstSong.id)
    }

    @Test
    internal fun `should add song to repository`(){
        val song = subject.createSong(firstSong)
        assertThat(song).isEqualTo(firstSong)
        verify(songRepository).add(firstSong)
    }
}

