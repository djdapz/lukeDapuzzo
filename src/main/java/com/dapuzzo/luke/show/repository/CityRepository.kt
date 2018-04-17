package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.show.domain.entity.CityEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository

@Repository
class CityRepository(val jdbcTemplate: JdbcTemplate) : BaseRepository<CityEntity> {

    override fun getAll(): List<CityEntity> =
             jdbcTemplate.queryForList(
                    "SELECT * FROM city")
                    .map {
                        CityEntity(
                                it.get("id") as Int,
                                it.get("state") as String,
                                it.get("name") as String
                        )
                    }


    override fun add(item: CityEntity): CityEntity {
        jdbcTemplate.update(
                "INSERT INTO city(state, name) VALUES(?,?)",
                item.stateAbbreviation,
                item.name)
        return item.apply {
            id = getCityByStateAndName(item)!!.id
        }
    }

    override fun getById(id: Any): CityEntity =
            jdbcTemplate.queryForObject(
                    "SELECT * FROM city WHERE id = ?",
                    getRowMapper(),
                    id)!!

    fun getCityByStateAndName(city: CityEntity): CityEntity? =
            jdbcTemplate.queryForObject(
                    "SELECT * FROM city WHERE name = ? AND state = ?",
                    getRowMapper(),
                    city.name,
                    city.stateAbbreviation)

    override fun getRowMapper(): RowMapper<CityEntity> {
        return RowMapper { rs, _ ->
            CityEntity(
                    rs.getInt("id"),
                    rs.getString("state"),
                    rs.getString("name")
            )
        }
    }
}