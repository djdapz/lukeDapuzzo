package com.devon.dapuzzo.show

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

/**
 * Created by devondapuzzo on 9/22/17.
 */
@Repository
interface ShowRepository : CrudRepository<Show, Long>
