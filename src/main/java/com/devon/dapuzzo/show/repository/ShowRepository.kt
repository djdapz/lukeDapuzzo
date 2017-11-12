package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.BaseRepository
import com.devon.dapuzzo.show.domain.entity.ShowEntity
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
                "INSERT INTO show(venue_id, date, style) VALUES(?,?::DATE,?)",
                item.venueId,
                item.date.toString(),
                item.style)
        return getShowByVenueDateAndStyle(item)
    }

    override fun getAll(): List<ShowEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM SHOW"
        ).map {
            ShowEntity(
                    it.get("id") as Int,
                    it.get("venue_id") as Int,
                    (it.get("date") as Date).toLocalDate(),
                    it.get("style") as String
            )
        }
    }

    override fun getById(id: Any): ShowEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM show WHERE id = ? ",
                getRowMapper(),
               id
        )

    }

    fun getShowByVenueDateAndStyle(show: ShowEntity): ShowEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM show WHERE venue_id = ? AND date = ?::DATE AND style = ? ",
                getRowMapper(),
                show.venueId,
                show.date.toString(),
                show.style
        )
    }

    override fun getRowMapper(): RowMapper<ShowEntity> {
        return RowMapper { rs, _ ->
            ShowEntity(
                    rs.getInt("id"),
                    rs.getInt("venue_id"),
                    LocalDate.parse(rs.getString("date")),
                    rs.getString("style")
            )
        }
    }

}
