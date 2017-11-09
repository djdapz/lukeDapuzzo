package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.show.domain.entity.VenueEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import javax.sql.DataSource

@Repository
class VenueRepository(dataSource: DataSource) {

    val jdbcTemplate: JdbcTemplate = JdbcTemplate(dataSource)

    fun getAllVenues(): List<VenueEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM venue")
                .map {
                    VenueEntity(
                            it.get("id") as Int,
                            it.get("city_id") as Int,
                            it.get("name") as String,
                            it.get("google_maps_link") as String
                    )
                }
    }

    fun add(venue: VenueEntity): VenueEntity {
        jdbcTemplate.update(
                "INSERT INTO venue(city_id, name, google_maps_link) VALUES(?,?,?)",
                venue.city_id,
                venue.name,
                venue.googleMapsLink)
        return getVenueByNameAndCity(venue)
    }

    fun getVenueById(id: Int): VenueEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * from venue WHERE id = ?",
                getRowMapper(),
                id)
    }

    fun getVenueByNameAndCity(venue: VenueEntity): VenueEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * from venue WHERE city_id = ? and name = ?",
                getRowMapper(),
                venue.city_id,
                venue.name)
    }

    private fun getRowMapper(): RowMapper<VenueEntity> {
        return RowMapper { rs, _ ->
            VenueEntity(
                    rs.getInt("id"),
                    rs.getInt("city_id"),
                    rs.getString("name"),
                    rs.getString("google_maps_link")
            )
        }
    }

}
