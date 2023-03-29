import React, { useContext } from 'react'
import { WeatherContext } from '../../../contexts/WeatherContext'

const WeatherHighlightsWindStatusSpeed = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<p className='py-2 text-white font-semibold'>
			<span className='text-3xl'>{Math.round(currentWeather.wind_mph)}</span>{' '}
			<span>m/s</span>
		</p>
	)
}

export default WeatherHighlightsWindStatusSpeed
