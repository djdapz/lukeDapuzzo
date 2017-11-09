package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.show.domain.entity.CityEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import javax.sql.DataSource

@Repository
class CityRepository(dataSource: DataSource) {

    final val jdbcTemplate: JdbcTemplate = JdbcTemplate(dataSource)

    fun getAllCities(): List<CityEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM city")
                .map {
                    CityEntity(
                            it.get("id") as Int,
                            it.get("state") as String,
                            it.get("name") as String
                    )
                }
    }

    fun add(city: CityEntity): CityEntity {
        jdbcTemplate.update(
                "INSERT INTO city(state, name) VALUES(?,?)",
                city.stateAbbreviation,
                city.name)
        return getCityByStateAndName(city)
    }

    fun getCityById(id: Int?): CityEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM city WHERE id = ?",
                getRowMapper(),
                id)
    }

    fun getCityByStateAndName(city: CityEntity): CityEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM city WHERE name = ? and state = ?",
                getRowMapper(),
                city.name,
                city.stateAbbreviation)
    }

    fun getRowMapper(): RowMapper<CityEntity> {
        return RowMapper { rs, _ ->
            CityEntity(
                    rs.getInt("id"),
                    rs.getString("state"),
                    rs.getString("name")
            )
        }
    }
}