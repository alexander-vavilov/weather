import React, { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'
import WeatherHighlightsItem from './WeatherHighlightsItem'

const WeatherHighlightsOther = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<WeatherHighlightsItem title='other'>
			<p>Visibility: {currentWeather.vis_km * 1000}m</p>
			<p>Humidity: {currentWeather.humidity}%</p>
			<p>Cloudiness: {currentWeather.cloud}%</p>
			<p>Pressure: {currentWeather.pressure_mb} hPa</p>
		</WeatherHighlightsItem>
	)
}

export default WeatherHighlightsOther
