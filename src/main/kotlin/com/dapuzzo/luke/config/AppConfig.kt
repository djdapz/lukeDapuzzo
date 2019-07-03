package com.dapuzzo.luke.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.client.RestTemplate
import org.springframework.web.reactive.config.WebFluxConfigurer
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class AppConfig {
    @Bean
    fun corsConfigurer(): WebMvcConfigurer {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/**")
                    .allowedMethods("*")
                    .allowedOrigins("*")
            }
        }
    }

    @Bean
    fun webfluxCorsConfigurer(): WebFluxConfigurer {
        return object : WebFluxConfigurer {
            override fun addCorsMappings(registry: org.springframework.web.reactive.config.CorsRegistry?) {
                registry!!.addMapping("/**")
                    .allowedMethods("*")
                    .allowedOrigins("*")
            }
        }
    }

    @Bean
    fun restTemplate(): RestTemplate = RestTemplate()
}
