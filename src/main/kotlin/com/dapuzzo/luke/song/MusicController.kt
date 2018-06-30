package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.MusicEntity
import org.springframework.web.bind.annotation.*

@RestController
class MusicController(val musicService: MusicService) {

    @GetMapping("/music")
    fun getAllSongs(): List<MusicEntity> = musicService.getAllMusic()

    @GetMapping("/music/{musicId}")
    fun getSongById(@PathVariable musicId: String): MusicEntity = musicService.getMusicById(musicId)

    @PostMapping("/music")
    fun createSong(@RequestBody music: MusicEntity): MusicEntity = musicService.createMusic(music)

    @DeleteMapping("/music/{musicId}")
    fun deleteSong(@PathVariable musicId: String) = musicService.delete(musicId)
}