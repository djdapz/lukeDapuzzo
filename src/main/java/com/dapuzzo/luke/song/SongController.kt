package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.SongEntity
import org.springframework.web.bind.annotation.*

@RestController
class SongController(val songService: SongService){

    @GetMapping("/songs")
    fun getAllSongs() : List<SongEntity> {
        return songService.getAllSongs()
    }

    @GetMapping("/songs/{songId}")
    fun getSongById(@PathVariable songId : Int) : SongEntity{
        return songService.getSongById(songId)
    }

    @PostMapping("/songs")
    fun createSong(
            @RequestBody song: SongEntity
    ) : SongEntity{
        return songService.createSong(song)
    }

    @DeleteMapping("/songs")
    fun deleteSong(
            @RequestParam id: Int
    ){
        songService.delete(id)
    }
}