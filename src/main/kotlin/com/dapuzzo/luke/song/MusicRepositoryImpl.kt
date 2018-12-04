package com.dapuzzo.luke.song

import com.dapuzzo.luke.song.domain.MusicEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Repository

@Repository
class MusicRepositoryImpl(jdbcTemplate: JdbcTemplate) : MusicRepository {

    val jdbc = NamedParameterJdbcTemplate(jdbcTemplate)

    override fun delete(id: String) {
        jdbc.update(
                "DELETE FROM song WHERE id = :id",
                MapSqlParameterSource()
                        .addValue("id", id)
        )
    }

    override fun add(item: MusicEntity): MusicEntity {
        jdbc.update(
                "INSERT INTO song VALUES(:id, :song_name, :song_type::song_type)",
                MapSqlParameterSource()
                        .addValue("id", item.id)
                        .addValue("song_name", item.name)
                        .addValue("song_type", item.type.toString())
        )
        return item
    }


    override fun getAll(): List<MusicEntity> = jdbc.query(
            "SELECT * FROM song",
            getRowMapper()
    )


    override fun getById(id: Any): MusicEntity? {
        return jdbc.queryForObject(
                "SELECT * FROM song WHERE id=:id",
                MapSqlParameterSource()
                        .addValue("id", id),
                getRowMapper()
        )
    }

    override fun getRowMapper(): RowMapper<MusicEntity> {
        return RowMapper { rs, _ ->
            MusicEntity(
                    rs.getString("id"),
                    rs.getString("name"),
                    MusicEntity.MusicType.valueOf(rs.getString("song_type"))
            )
        }
    }
}