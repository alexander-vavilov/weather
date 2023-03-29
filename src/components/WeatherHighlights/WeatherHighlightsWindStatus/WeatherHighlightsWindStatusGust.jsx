import React, { useContext } from 'react'
import { WeatherContext } from '../../../contexts/WeatherContext'

const WeatherHighlightsWindStatusGust = () => {
	const { currentWeather } = useContext(WeatherContext)

	return <p>Gust: {Math.round(currentWeather.gust_mph)}m/s</p>
}

export default WeatherHighlightsWindStatusGust
