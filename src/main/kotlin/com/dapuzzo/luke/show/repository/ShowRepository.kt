package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.show.domain.entity.ShowEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import java.sql.Date
import java.time.LocalDate

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Repository
class ShowRepository(val jdbcTemplate: JdbcTemplate) : BaseRepository<ShowEntity> {

    override fun add(item: ShowEntity): ShowEntity {
        jdbcTemplate.update(
                "INSERT INTO show(venue_id, date, notes) VALUES(?,?::DATE,?)",
                item.venueId,
                item.date.toString(),
                item.notes)
        return getShowByVenueDateAndStyle(item)!!
    }

    override fun getAll(): List<ShowEntity> = jdbcTemplate
            .queryForList("SELECT * FROM SHOW")
            .map {
                ShowEntity(
                        it["id"] as Int,
                        it["venue_id"] as Int,
                        (it["date"] as Date).toLocalDate(),
                        it["notes"] as String
                )
            }

    override fun getById(id: Any): ShowEntity? = jdbcTemplate
            .queryForObject(
                    "SELECT * FROM show WHERE id = ? ",
                    getRowMapper(),
                    id
            )


    fun getShowByVenueDateAndStyle(show: ShowEntity): ShowEntity? = jdbcTemplate
            .queryForObject(
                    "SELECT * FROM show WHERE venue_id = ? AND date = ?::DATE AND notes = ? ",
                    getRowMapper(),
                    show.venueId,
                    show.date.toString(),
                    show.notes
            )

    override fun getRowMapper(): RowMapper<ShowEntity> = RowMapper { rs, _ ->
        ShowEntity(
                rs.getInt("id"),
                rs.getInt("venue_id"),
                LocalDate.parse(rs.getString("date")),
                rs.getString("notes")
        )
    }

    fun delete(id: Int) = jdbcTemplate.update("DELETE FROM show where id=?", id)
}
