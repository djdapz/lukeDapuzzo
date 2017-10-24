package com.devon.dapuzzo.show


import javax.persistence.*
import java.io.Serializable
import java.sql.Date

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Entity
@Table(name = "all_shows")
open class Show(
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
) : Serializable