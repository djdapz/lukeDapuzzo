package com.devon.dapuzzo.show;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Entity
@Data
@Table(name="all_shows")
@AllArgsConstructor
@NoArgsConstructor
public class Show implements Serializable {
    @Id
    @GeneratedValue
    private Integer id;
    @NonNull
    @Column(nullable = false)
    private Date date;
    @NonNull
    @Column(nullable = false)
    private String venue;
    @NonNull
    @Column(nullable = false)
    private String city;
    @NonNull
    @Column(nullable = false)
    private String state;
    @NonNull
    @Column(nullable = false)
    private String google_maps_link;
}
