package com.dapuzzo.luke.core


import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit4.SpringRunner


@RunWith(SpringRunner::class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = NONE)
@CleanupBefore
@CleanupAfter
@SpringBootTest
abstract class DatabaseBase {
    @Autowired
    lateinit var jdbcTemplate: JdbcTemplate
}