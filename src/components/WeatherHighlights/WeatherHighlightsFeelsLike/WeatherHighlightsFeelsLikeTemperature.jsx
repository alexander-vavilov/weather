import React, { useContext } from 'react'
import { TbTemperature } from 'react-icons/tb'
import { WeatherContext } from '../../../contexts/WeatherContext'

const WeatherHighlightsFeelsLikeTemperature = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<div className='flex items-center text-white text-3xl py-4 font-semibold'>
			<TbTemperature />
			<div className='flex'>
				<span>{Math.round(currentWeather.feelslike_c)}</span>
				<span className='text-xl'>°C</span>
			</div>
		</div>
	)
}

export default WeatherHighlightsFeelsLikeTemperature
