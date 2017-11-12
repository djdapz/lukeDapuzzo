package com.devon.dapuzzo.core

import org.flywaydb.core.Flyway
import org.junit.After
import org.junit.Before
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.datasource.SingleConnectionDataSource


abstract class BaseRepositoryTest {
    val flyway: Flyway = Flyway()
    val dataSource = SingleConnectionDataSource("jdbc:postgresql://localhost:5432/lukedapuzzo", "devondapuzzo", "", true)
    val jdbcTemplate = JdbcTemplate(dataSource)

    @Before
    fun setUp() {
        flyway.dataSource = dataSource
        flyway.migrate()
        setupDependencies()

    }

    @After
    fun tearDown() {
        flyway.clean()
    }

    abstract fun setupDependencies()
}