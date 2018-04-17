package com.dapuzzo.luke.core

import org.springframework.jdbc.core.RowMapper

interface BaseRepository<TYPE> {
    fun add(item: TYPE): TYPE
    fun getAll() : List<TYPE>
    fun getById(id: Any) : TYPE
    fun getRowMapper(): RowMapper<TYPE>
}