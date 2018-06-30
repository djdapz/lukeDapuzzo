package com.dapuzzo.luke.show.repository


import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.show.domain.entity.StateEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Repository
class StateRepository(val jdbcTemplate: JdbcTemplate) : BaseRepository<StateEntity> {

    override fun getAll(): List<StateEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM state")
                .map {
                    StateEntity(
                            it.get("abbreviation") as String,
                            it.get("name") as String
                    )
                }
    }

    override fun add(item: StateEntity): StateEntity {
        jdbcTemplate.update(
                "INSERT INTO State VALUES(?,?)",
                item.abbreviation,
                item.name)
        return item
    }

    override fun getById(id: Any): StateEntity =
            jdbcTemplate.queryForObject(
                    "SELECT * FROM state WHERE abbreviation = ?",
                    getRowMapper(),
                    id)!!

    override fun getRowMapper(): RowMapper<StateEntity> =
            RowMapper { rs, _ ->
                StateEntity(
                        rs.getString("abbreviation"),
                        rs.getString("name")
                )
            }

}
