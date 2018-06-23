package com.dapuzzo.luke.song.domain

data class MusicEntity(
        val id: String,
        val name: String,
        val type: MusicType = MusicType.SOUNDCLOUD_SONG
) {
    fun toMusic(): Music = Music(id, name)

    enum class MusicType {
        SPOTIFY_ALBUM, SPOTIFY_SONG, SOUNDCLOUD_SONG
    }
}