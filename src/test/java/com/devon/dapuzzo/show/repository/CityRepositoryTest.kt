package com.devon.dapuzzo.show.repository

import com.devon.dapuzzo.core.BaseRepositoryTest
import com.devon.dapuzzo.core.random.randomCityEntity
import org.assertj.core.api.Assertions
import org.junit.Test

class CityRepositoryTest : BaseRepositoryTest() {
    val cityRepository: CityRepository = CityRepository(jdbcTemplate)

    var firstCity = randomCityEntity()
    var secondCity = randomCityEntity()

    override fun setupDependencies() {
        setupCityDependencies(jdbcTemplate, firstCity, secondCity)
        firstCity = cityRepository.add(firstCity)
        secondCity = cityRepository.add(secondCity)
    }

    @Test
    internal fun `should get all cities`(){
        val actualCities = cityRepository.getAll()

        Assertions.assertThat(actualCities.size).isEqualTo(2)
        Assertions.assertThat(actualCities).containsExactlyInAnyOrder(firstCity, secondCity)
    }

    @Test
    internal fun `should get city by abbreviation`(){
        val actualState = cityRepository.getById(firstCity.id)

        Assertions.assertThat(actualState).isEqualTo(firstCity)
    }

}