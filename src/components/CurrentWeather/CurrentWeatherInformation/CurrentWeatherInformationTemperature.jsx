import React, { useContext } from 'react'
import { WeatherContext } from '../../../contexts/WeatherContext'

const CurrentWeatherInformationTemperature = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<div className='flex py-3 font-semibold'>
			<span className='text-5xl'>{Math.round(currentWeather.temp_c)}</span>
			<span className='text-3xl'>°C</span>
		</div>
	)
}

export default CurrentWeatherInformationTemperature
