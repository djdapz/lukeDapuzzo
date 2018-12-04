package com.dapuzzo.luke.core

import com.dapuzzo.luke.show.domain.entity.CityEntity
import org.springframework.jdbc.core.RowMapper

interface BaseRepository<TYPE> {
    fun add(item: TYPE): TYPE
    fun getAll() : List<TYPE>
    fun getById(id: Any) : TYPE?
    fun getRowMapper(): RowMapper<TYPE>
}