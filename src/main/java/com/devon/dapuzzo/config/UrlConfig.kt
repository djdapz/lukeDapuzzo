package com.devon.dapuzzo.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class UrlConfig(
        @Value("\${dapuzzo.luke.client.url}")
        val clientUrl : String
) {
    @Bean
    fun clientUrl(): String {
        return clientUrl
    }
}