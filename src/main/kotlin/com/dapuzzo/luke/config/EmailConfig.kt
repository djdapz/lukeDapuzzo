package com.dapuzzo.luke.config

import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

const val EMAIL_DIST_LIST = "EMAILDISTLIST"

@Configuration
class EmailConfig {

    @Bean
    @Qualifier(EMAIL_DIST_LIST)
    fun emailDistributionList(@Value("\${dapuzzo.luke.email-distribution-list}") recipients: String) =
        recipients.split(",")

}