package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.util.random.randomCityEntity
import org.assertj.core.api.Assertions
import org.flywaydb.core.Flyway
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.springframework.jdbc.datasource.SingleConnectionDataSource

class CityRepositoryTest{

    val flyway: Flyway = Flyway()
    val dataSource = SingleConnectionDataSource("jdbc:postgresql://localhost:5432/lukedapuzzo", "devondapuzzo", "", true)
    val cityRepository: CityRepository = CityRepository(dataSource)

    var firstCity = randomCityEntity()
    var secondCity = randomCityEntity()

    @Before
    fun setUp() {
        flyway.dataSource = dataSource
        flyway.migrate()

        setupCityDependencies(dataSource, firstCity, secondCity)
        firstCity = cityRepository.add(firstCity)
        secondCity = cityRepository.add(secondCity)
    }

    @After
    fun tearDown() {
        flyway.clean()
    }

    @Test
    internal fun `should get all cities`(){
        val actualCities = cityRepository.getAllCities()

        Assertions.assertThat(actualCities.size).isEqualTo(2)
        Assertions.assertThat(actualCities).containsExactlyInAnyOrder(firstCity, secondCity)
    }

    @Test
    internal fun `should get city by abbreviation`(){
        val actualState = cityRepository.getCityById(firstCity.id)

        Assertions.assertThat(actualState).isEqualTo(firstCity)
    }

}