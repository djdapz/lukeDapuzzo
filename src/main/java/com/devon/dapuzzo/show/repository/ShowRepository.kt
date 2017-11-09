package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.show.domain.entity.ShowEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import java.sql.Date
import java.time.LocalDate
import javax.sql.DataSource

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Repository
class ShowRepository(dataSource: DataSource) {

    val jdbcTemplate: JdbcTemplate = JdbcTemplate(dataSource)


    fun add(show: ShowEntity): ShowEntity {
        jdbcTemplate.update(
                "INSERT INTO show(venue_id, date, style) VALUES(?,?::DATE,?)",
                show.venueId,
                show.date.toString(),
                show.style)
        return getShowByVenueDateAndStyle(show)
    }

    fun getAllShows(): List<ShowEntity> {
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

    fun getShowById(id: Int): ShowEntity {
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

    private fun getRowMapper(): RowMapper<ShowEntity> {
        return RowMapper { rs, _ ->
            ShowEntity(
                    rs.getInt("id"),
                    rs.getInt("venue_id"),
                    LocalDate.parse(rs.getString("date")),
                    rs.getString("style")
            )
        }
    }




//        public List<ProjectEntity> getAllProjectEntities()
//        {
//            return jdbcTemplate.queryForList(
//                    "SELECT * FROM projects"
//            ).stream()
//                    .map({ r ->
//                        ProjectEntity(
//                                r.get("id") as Int,
//                                r.get("name") as String,
//                                (r.get("start_date") as Date).toLocalDate(),
//                                r.get("hourly_rate") as Int,
//                                r.get("budget") as Int
//                        )
//                    }).collect(toList<Any>())
}
