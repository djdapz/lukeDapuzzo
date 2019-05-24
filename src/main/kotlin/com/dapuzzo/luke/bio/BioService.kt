package com.dapuzzo.luke.bio

import org.springframework.web.bind.annotation.RestController

@RestController
interface BioService {
    fun updateBio(new: List<String>)
    fun getBio(): List<String>
}