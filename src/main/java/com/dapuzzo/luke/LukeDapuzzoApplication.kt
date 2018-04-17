package com.dapuzzo.luke

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class LukeDapuzzoApplication {

    companion object{
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(LukeDapuzzoApplication::class.java, *args)
        }
    }

}
