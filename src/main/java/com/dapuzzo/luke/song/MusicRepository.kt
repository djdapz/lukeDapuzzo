package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.song.domain.MusicEntity

interface MusicRepository : BaseRepository<MusicEntity>{
    fun delete(id: String)
}

