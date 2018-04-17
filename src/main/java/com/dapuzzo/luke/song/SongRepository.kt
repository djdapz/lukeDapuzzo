package com.dapuzzo.luke.song

import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.song.domain.SongEntity

interface SongRepository : BaseRepository<SongEntity>{
    fun delete(id: Int)
}

