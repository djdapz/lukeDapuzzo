package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.SongEntity
import org.springframework.web.bind.annotation.*

@RestController
class SongController(val songService: SongService) {

    @GetMapping("/songs")
    fun getAllSongs(): List<SongEntity> = songService.getAllSongs()

    @GetMapping("/songs/{songId}")
    fun getSongById(@PathVariable songId: Int): SongEntity = songService.getSongById(songId)

    @PostMapping("/songs")
    fun createSong(@RequestBody song: SongEntity): SongEntity = songService.createSong(song)

    @DeleteMapping("/songs/{songId}")
    fun deleteSong(@PathVariable songId: Int) = songService.delete(songId)
}