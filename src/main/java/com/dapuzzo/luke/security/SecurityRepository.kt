package com.dapuzzo.luke.security

import org.postgresql.util.PSQLException
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Component

@Component
class SecurityRepository(jdbcTemplate: JdbcTemplate) {


    val jdbcTemplate = NamedParameterJdbcTemplate(jdbcTemplate)

    fun save(account: Account) =
                jdbcTemplate.update("INSERT INTO account (username, password) VALUES(:username, :password)",
                        MapSqlParameterSource()
                                .addValue("username", account.username)
                                .addValue("password", account.password)
                )

    fun doesAccountExist(account: Account): Boolean =
            jdbcTemplate.queryForObject(
                    "SELECT count(*) FROM account WHERE username = :username        AND password = :password",
                    MapSqlParameterSource()
                            .addValue("username", account.username)
                            .addValue("password", account.password),
                    Int::class.java) > 0
}

