package com.dapuzzo.luke.core.random

import com.dapuzzo.luke.song.domain.MusicEntity

fun randomSongEntity(
        id: String = randomString(),
        name: String = randomString(),
        type: MusicEntity.MusicType = randomSongType()
): MusicEntity = MusicEntity(id = id, name = name, type = type)


fun randomSongType(): MusicEntity.MusicType =
        when (randomInt(3)) {
            1 -> MusicEntity.MusicType.SOUNDCLOUD_SONG
            2 -> MusicEntity.MusicType.SPOTIFY_ALBUM
            else -> MusicEntity.MusicType.SPOTIFY_SONG
        }
