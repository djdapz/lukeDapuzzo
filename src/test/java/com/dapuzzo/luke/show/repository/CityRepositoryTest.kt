package com.dapuzzo.luke.show.repository

import com.dapuzzo.luke.core.BaseRepositoryTest
import com.dapuzzo.luke.core.random.randomCityEntity
import org.assertj.core.api.Assertions.*
import org.junit.Before
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired

class CityRepositoryTest : BaseRepositoryTest() {

    @Autowired
    lateinit var cityRepository: CityRepository

    @Autowired
    lateinit var showRepositoryDependencies: ShowRepositoryDependencies

    val firstCity = randomCityEntity()
    val secondCity = randomCityEntity()

    @Before
    fun setupDependencies() {
        showRepositoryDependencies.setupCityDependencies(firstCity, secondCity)

        cityRepository.add(firstCity)
        cityRepository.add(secondCity)
    }

    @Test
    internal fun `should get all cities`() {
        val actualCities = cityRepository.getAll()

        assertThat(actualCities.size).isEqualTo(2)
        assertThat(actualCities).containsExactlyInAnyOrder(firstCity, secondCity)
    }

    @Test
    internal fun `should get city by abbreviation`() {
        val actualState = cityRepository.getById(firstCity.id)

        assertThat(actualState).isEqualTo(firstCity)
    }

}