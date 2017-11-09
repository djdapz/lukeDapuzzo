//package com.devon.dapuzzo.show
//
//import com.devon.dapuzzo.config.JsonConfig
//import com.devon.dapuzzo.show.domain.Show
//import com.devon.dapuzzo.show.domain.entity.CityEntity
//import com.devon.dapuzzo.show.domain.entity.ShowEntity
//import com.devon.dapuzzo.show.domain.entity.StateEntity
//import com.devon.dapuzzo.show.domain.entity.VenueEntity
//import com.devon.dapuzzo.show.repository.CityRepository
//import com.devon.dapuzzo.show.repository.ShowRepository
//import com.devon.dapuzzo.show.repository.StateRepository
//import com.devon.dapuzzo.show.repository.VenueRepository
//import com.devon.dapuzzo.util.random.randomShow
//import com.fasterxml.jackson.module.kotlin.readValue
//import io.restassured.RestAssured
//import org.assertj.core.api.Assertions.*
//import org.flywaydb.core.Flyway
//import org.junit.After
//import org.junit.Before
//import org.junit.Test
//import org.junit.runner.RunWith
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.context.embedded.LocalServerPort
//import org.springframework.boot.test.context.SpringBootTest
//import org.springframework.context.annotation.Profile
//import org.springframework.test.context.junit4.SpringRunner
//
//@RunWith(SpringRunner::class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@Profile("test")
//class ShowControllerIntegrationTest {
//
//    @Autowired
//    var flyway: Flyway? = null
//
//    @Autowired
//    var cityRepository: CityRepository? = null
//
//    @Autowired
//    var stateRepository: StateRepository? = null
//
//    @Autowired
//    var venueRepository: VenueRepository? = null
//
//    @Autowired
//    var showRepository: ShowRepository? = null
//
//    @LocalServerPort
//    val port: Int? = null
//
//    val firstExpectedShow = randomShow()
//    val secondExpectedShow = randomShow()
//
//    @Before
//    fun setUp() {
//        flyway!!.migrate()
//
//        addShowObjectToDatabse(firstExpectedShow)
//        addShowObjectToDatabse(secondExpectedShow)
//
//    }
//
//    @After
//    fun tearDown() {
//        flyway!!.clean()
//    }
//
//    @Test
//    internal fun `should get show from the database`() {
//        val showsJson = RestAssured.get("http://localhost:${port}/api/shows").asString()
//        val actual: List<Show> = JsonConfig.objectMapper().readValue(showsJson)
//
//        assertThat(actual).containsExactlyInAnyOrder(firstExpectedShow, secondExpectedShow)
//    }
//
//    //TODO - find a more gracefull way to do this BOTH Ways with Converter classes
//    //May need to invoke services, but would be awesome if could be static
//    internal fun `addShowObjectToDatabse`(show : Show){
//        stateRepository!!.add(StateEntity(show.venue.city.state))
//        cityRepository!!.add(CityEntity(show.venue.city))
//        venueRepository!!.add(VenueEntity(show.venue))
//        showRepository!!.add(ShowEntity(show))
//    }
//
//}