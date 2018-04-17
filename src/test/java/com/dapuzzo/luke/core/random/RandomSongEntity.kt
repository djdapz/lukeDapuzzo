package com.dapuzzo.luke.core.random

import com.dapuzzo.luke.song.domain.SongEntity

fun randomSongEntity() : SongEntity {
    return SongEntity(
            randomInt(),
            randomString()
    )
}