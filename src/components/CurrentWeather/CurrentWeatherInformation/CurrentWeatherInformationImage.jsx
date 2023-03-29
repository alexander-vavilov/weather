import React, { useContext } from 'react'
import { images } from '../../../assets'
import { WeatherContext } from '../../../contexts/WeatherContext'

const CurrentWeatherInformationImage = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<img
			src={images[currentWeather?.condition.code].day.img}
			className='w-36 select-none'
			draggable={false}
			alt='weatherImg'
		/>
	)
}

export default CurrentWeatherInformationImage
