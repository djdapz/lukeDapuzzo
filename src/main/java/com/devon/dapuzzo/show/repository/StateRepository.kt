package com.devon.dapuzzo.show.repository


import com.devon.dapuzzo.show.domain.entity.StateEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import javax.sql.DataSource

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Repository
class StateRepository(dataSource: DataSource) {

    val jdbcTemplate: JdbcTemplate = JdbcTemplate(dataSource)


    fun getAllStates(): List<StateEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM state")
                .map {
                    StateEntity(
                            it.get("abbreviation") as String,
                            it.get("name") as String
                    )
                }
    }

    fun add(state: StateEntity): StateEntity {
        jdbcTemplate.update(
                "INSERT INTO State VALUES(?,?)",
                state.abbreviation,
                state.name)
        return state
    }

    fun getStateByAbbreviation(abbreviation: String): StateEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * from state WHERE abbreviation = ?",
                getRowMapper(),
                abbreviation)
    }

    fun getRowMapper(): RowMapper<StateEntity> {
        return RowMapper { rs, _ ->
            StateEntity(
                    rs.getString("abbreviation"),
                    rs.getString("name")
            )
        }
    }

}
