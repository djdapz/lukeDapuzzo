package com.dapuzzo.luke.core


import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.context.jdbc.Sql.ExecutionPhase.*
import org.springframework.test.context.junit4.SpringRunner


@RunWith(SpringRunner::class)
@ActiveProfiles("test")
@Sql(executionPhase = AFTER_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
@AutoConfigureTestDatabase(replace = NONE)
@JdbcTest
annotation class DatabaseTest

@RunWith(SpringRunner::class)
@ActiveProfiles("test")
@Sql(executionPhase = AFTER_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
@AutoConfigureTestDatabase(replace = NONE)
@JdbcTest
abstract class DatabaseBase