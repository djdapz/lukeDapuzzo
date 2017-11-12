package com.devon.dapuzzo.song

import com.devon.dapuzzo.song.domain.SongEntity
import org.springframework.stereotype.Service

@Service
class SongService(val songRepository: SongRepository){

    fun getAllSongs() : List<SongEntity>{
        return songRepository.getAll()
    }


    fun createSong(firstSong: SongEntity): SongEntity{
        return songRepository.add(firstSong)
    }

    fun getSongById(id: Int): SongEntity{
        return songRepository.getById(id)
    }

}