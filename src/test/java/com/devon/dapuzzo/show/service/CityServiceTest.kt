package com.devon.dapuzzo.show.service

import com.devon.dapuzzo.core.random.randomCityEntity
import com.devon.dapuzzo.core.random.randomState
import com.devon.dapuzzo.show.domain.City
import com.devon.dapuzzo.show.repository.CityRepository
import com.nhaarman.mockito_kotlin.any
import com.nhaarman.mockito_kotlin.doReturn
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import org.assertj.core.api.Assertions
import org.junit.Test

class CityServiceTest {

    val cityEntity = randomCityEntity()
    val expected = City(
            id= cityEntity.id,
            state = randomState(cityEntity.stateAbbreviation),
            name = cityEntity.name
    )

    val cityRepository = mock<CityRepository> {
        on { getById(any()) } doReturn cityEntity
    }

    val stateService = mock<StateService>{
        on { getState(any())} doReturn expected.state
    }

    val subject = CityService(cityRepository, stateService)


    @Test
    internal fun `should get state by abbreviation`() {
        val actual = subject.getCityById(cityEntity.id)
        Assertions.assertThat(actual).isEqualTo(expected)
    }

    @Test
    internal fun `should call getCityByID`(){
        subject.getCityById(cityEntity.id)
        verify(cityRepository).getById(cityEntity.id)
    }

    @Test
    internal fun `should call getState`(){
        subject.getCityById(cityEntity.id)
        verify(stateService).getState(expected.state.abbreviation)

    }
}
