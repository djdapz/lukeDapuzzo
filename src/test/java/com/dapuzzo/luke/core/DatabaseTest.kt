package com.dapuzzo.luke.core


import com.dapuzzo.luke.LukeDapuzzoApplication
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.context.junit4.SpringRunner


@RunWith(SpringRunner::class)
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = NONE)
@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
@SpringBootTest(classes= [LukeDapuzzoApplication::class])
abstract class DatabaseBase {
    @Autowired
    lateinit var jdbcTemplate: JdbcTemplate
}