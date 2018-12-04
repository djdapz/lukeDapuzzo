package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.Cleanup
import com.dapuzzo.luke.core.DatabaseBase
import com.dapuzzo.luke.core.random.randomCityEntity
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

@Cleanup
class CityRepositoryTest : DatabaseBase (){

    @Autowired
    lateinit var cityRepository: CityRepository

    val firstCity = randomCityEntity()
    val secondCity = randomCityEntity()

    @Before
    fun setupDependencies() {
        ShowRepositoryDependencies(jdbcTemplate).setupCityDependencies(firstCity, secondCity)

        cityRepository.add(firstCity)
        cityRepository.add(secondCity)
    }

    @Test
    fun shouldGetAllCities() {
        val actualCities = cityRepository.getAll()

        assertThat(actualCities.size).isEqualTo(2)
        assertThat(actualCities).containsExactlyInAnyOrder(firstCity, secondCity)
    }

    @Test
    fun shouldGetAllCititesbyAbbreviation() {
        val actualState = cityRepository.getById(firstCity.id!!)

        assertThat(actualState).isEqualTo(firstCity)
    }

}