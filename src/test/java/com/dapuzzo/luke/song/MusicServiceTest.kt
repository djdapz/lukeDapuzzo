package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.random.randomSongEntity
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType.*
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import java.util.*


class MusicServiceTest {

    val firstSoundcloudSong = randomSongEntity(type = SOUNDCLOUD_SONG)
    val secondSoundcloudSong = randomSongEntity(type = SOUNDCLOUD_SONG)

    val firstSpotifySong = randomSongEntity(type = SPOTIFY_SONG)
    val secondSpotifySong = randomSongEntity(type = SPOTIFY_SONG)

    val firstSpotifyAlbum = randomSongEntity(type = SPOTIFY_ALBUM)
    val secondSpotifyAlbum = randomSongEntity(type = SPOTIFY_ALBUM)


    val allSongs = Arrays.asList(
            firstSoundcloudSong,
            secondSoundcloudSong,
            firstSpotifySong,
            secondSpotifySong,
            firstSpotifyAlbum,
            secondSpotifyAlbum
    )
    private val songRepository = mock<MusicRepository> {
        on { getAll() } doReturn allSongs
        on { add(firstSoundcloudSong) } doReturn firstSoundcloudSong
        on { getById(firstSoundcloudSong.id) } doReturn firstSoundcloudSong
    }

    val subject = MusicService(songRepository)


    @Test
    internal fun `should get all songs`() {
        val songs = subject.getAllMusic()
        assertThat(songs[SOUNDCLOUD_SONG]).containsExactlyInAnyOrder(firstSoundcloudSong.toMusic(), secondSoundcloudSong.toMusic())
        assertThat(songs[SPOTIFY_SONG]).containsExactlyInAnyOrder(firstSpotifySong.toMusic(), secondSpotifySong.toMusic())
        assertThat(songs[SPOTIFY_ALBUM]).containsExactlyInAnyOrder(firstSpotifyAlbum.toMusic(), secondSpotifyAlbum.toMusic())
        verify(songRepository).getAll()
    }

    @Test
    internal fun `should get song by id`() {
        val song = subject.getMusicById(firstSoundcloudSong.id)
        assertThat(song).isEqualTo(firstSoundcloudSong)
        verify(songRepository).getById(firstSoundcloudSong.id)
    }

    @Test
    internal fun `should add song to repository`() {
        val song = subject.createMusic(firstSoundcloudSong)
        assertThat(song).isEqualTo(firstSoundcloudSong)
        verify(songRepository).add(firstSoundcloudSong)
    }

    @Test
    internal fun `should delete song from repository`() {
        subject.delete(firstSoundcloudSong.id)
        verify(songRepository).delete(firstSoundcloudSong.id)
    }
}



