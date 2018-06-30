package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.BaseRepository
import com.dapuzzo.luke.show.domain.entity.VenueEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository

@Repository
class VenueRepository(val jdbcTemplate: JdbcTemplate) : BaseRepository<VenueEntity> {

    override fun getAll(): List<VenueEntity> {
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

    override fun add(item: VenueEntity): VenueEntity {
        jdbcTemplate.update(
                "INSERT INTO venue(city_id, name, google_maps_link) VALUES(?,?,?)",
                item.city_id,
                item.name,
                item.googleMapsLink)
        return item.apply {
            id = getVenueByNameAndCity(item).id
        }
    }

    override fun getById(id: Any): VenueEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * from venue WHERE id = ?",
                getRowMapper(),
                id)!!
    }

    fun getVenueByNameAndCity(venue: VenueEntity): VenueEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * from venue WHERE city_id = ? and name = ?",
                getRowMapper(),
                venue.city_id,
                venue.name)!!
    }

    override fun getRowMapper(): RowMapper<VenueEntity> {
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
