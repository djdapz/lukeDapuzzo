package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.Music
import com.dapuzzo.luke.song.domain.MusicEntity
import com.dapuzzo.luke.song.domain.MusicEntity.MusicType
import org.springframework.stereotype.Service
import java.util.Arrays.asList

@Service
class MusicService(val musicRepository: MusicRepository) {

    fun getAllMusic(): Map<MusicType, Collection<Music>> =
            HashMap<MusicType, Collection<Music>>()
                    .apply {
                        musicRepository.getAll().forEach {
                            this[it.type] = this[it.type]?.union(asList(it.toMusic())) ?: asList(it.toMusic())
                        }
                    }

    fun createMusic(firstMusic: MusicEntity) = musicRepository.add(firstMusic)

    fun getMusicById(id: String) = musicRepository.getById(id)

    fun delete(id: String) = musicRepository.delete(id)
}