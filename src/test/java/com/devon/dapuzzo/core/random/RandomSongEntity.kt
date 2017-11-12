package com.devon.dapuzzo.core.random

import com.devon.dapuzzo.song.domain.SongEntity

fun randomSongEntity() : SongEntity {
    return SongEntity(
            randomInt(),
            randomString()
    )
}