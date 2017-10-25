package com.devon.dapuzzo.show

import java.io.Serializable
import java.sql.Date
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "all_shows")
data class Show(
        @Id
        val id: Int,
        @Column(nullable = false)
        val date: Date,
        @Column(nullable = false)
        val venue: String,
        @Column(nullable = false)
        val city: String,
        @Column(nullable = false)
        val state: String,
        @Column(nullable = false)
        val google_maps_link: String,
        @Column(nullable = false)
        val style: String
) : Serializable {
    constructor() : this(
            0,
            Date.valueOf("1999-01-10"),
            "DEFAULT",
            "DEFAULT",
            "DEFAULT",
            "DEFAULT",
            "DEFAULT"
    )
}