package com.dapuzzo.luke.core


import com.dapuzzo.luke.LukeDapuzzoApplication
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner


@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
        classes = arrayOf(LukeDapuzzoApplication::class))
@RunWith(SpringJUnit4ClassRunner::class)
@ActiveProfiles("test")
@Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = arrayOf("classpath:cleanup.sql"))
@AutoConfigureTestDatabase(replace = NONE)
abstract class BaseRepositoryTest