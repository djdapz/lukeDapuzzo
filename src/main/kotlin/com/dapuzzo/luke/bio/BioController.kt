package com.dapuzzo.luke.bio

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

data class BioResponseBody(val bio: List<String>)
data class BioRequestBody(val bio: List<String>)

@RestController
class BioController(val bioService: BioService) {

    @GetMapping("/bio")
    fun getBio() = BioResponseBody(bioService.getBio())

    @PutMapping("/bio")
    fun updateBio(@RequestBody newBio: BioRequestBody) = bioService.updateBio(newBio.bio)
}