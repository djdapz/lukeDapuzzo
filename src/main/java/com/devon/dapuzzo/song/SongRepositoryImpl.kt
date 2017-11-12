package com.devon.dapuzzo.song

import com.devon.dapuzzo.song.domain.SongEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository

@Repository
class SongRepositoryImpl(val jdbcTemplate: JdbcTemplate) : SongRepository {

    override fun add(item: SongEntity): SongEntity {
        jdbcTemplate.update(
                "INSERT INTO song VALUES(?, ?)"
                , item.id
                , item.name
        )
        return item
    }


    override fun getAll(): List<SongEntity> {
        return jdbcTemplate.queryForList(
                "SELECT * FROM song"
        ).map{
            SongEntity(
                    it.get("id") as Int,
                    it.get("name") as String
            )
        }
    }


    override fun getById(id: Any): SongEntity {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM song WHERE id=?",
                        getRowMapper(),
                        id
        )
    }

    override fun getRowMapper(): RowMapper<SongEntity> {
        return RowMapper { rs, _ ->
            SongEntity(
                    rs.getInt("id"),
                    rs.getString("name")
            )
        }
    }

}