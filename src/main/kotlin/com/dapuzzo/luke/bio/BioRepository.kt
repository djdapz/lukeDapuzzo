package com.dapuzzo.luke.bio

import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.bind.annotation.RestController

@RestController
class BioRepository(val jdbcTemplate: JdbcTemplate) : BioService {

    override fun getBio(): List<String> = jdbcTemplate.query("SELECT bio from bio") { rs, _ ->
        rs.getString("bio")
    }.last().replace("<APOSTROPHE>", "'").split("<BREAK>")

    override fun updateBio(new: List<String>) {
        val toInsert = new.joinToString("<BREAK>").replace("'", "<APOSTROPHE>")
        val sql = "INSERT INTO bio (bio) values ('$toInsert')"
        jdbcTemplate.update(sql)
    }
}