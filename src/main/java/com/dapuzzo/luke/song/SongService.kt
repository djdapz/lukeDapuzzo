package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.SongEntity
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

    fun delete(id: Int) {
        songRepository.delete(id)
    }

}