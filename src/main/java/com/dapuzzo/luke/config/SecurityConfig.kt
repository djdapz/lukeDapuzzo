package com.dapuzzo.luke.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import javax.sql.DataSource


@Configuration
@EnableWebSecurity
class SecurityConfig : WebSecurityConfigurerAdapter() {

    @Autowired
    lateinit var dataSource: DataSource

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.jdbcAuthentication().dataSource(dataSource)
                //language=sql
                .usersByUsernameQuery("select username, password, enabled from account where username=?")
                //language=sql
                .authoritiesByUsernameQuery("select username, role  from account where username=?")
                .passwordEncoder(passwordEncoder())
    }

    override fun configure(http: HttpSecurity) {
        http
                .csrf().disable()
                .httpBasic().and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/**").permitAll()
                .antMatchers(HttpMethod.POST, "/account/create").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.POST, "/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/**").authenticated()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}