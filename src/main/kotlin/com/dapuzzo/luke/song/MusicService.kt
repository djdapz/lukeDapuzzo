package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.MusicEntity
import org.springframework.stereotype.Service

@Service
class MusicService(val musicRepository: MusicRepository) {

    fun getAllMusic():List<MusicEntity> = musicRepository.getAll()

    fun createMusic(firstMusic: MusicEntity) = musicRepository.add(firstMusic)

    fun getMusicById(id: String) = musicRepository.getById(id)

    fun delete(id: String) = musicRepository.delete(id)
}