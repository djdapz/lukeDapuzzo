package com.dapuzzo.luke.bio

import org.springframework.web.bind.annotation.RestController

@RestController
interface BioService {
    fun updateBio(new: String)
    fun getBio(): String
}