import React from 'react'
import WeatherHighlightsItem from '../WeatherHighlightsItem'
import WeatherHighlightsWindStatusDirection from './WeatherHighlightsWindStatusDirection'
import WeatherHighlightsWindStatusGust from './WeatherHighlightsWindStatusGust'
import WeatherHighlightsWindStatusSpeed from './WeatherHighlightsWindStatusSpeed'

const WeatherHighlightsWindStatus = () => {
	return (
		<WeatherHighlightsItem title='wind status'>
			<WeatherHighlightsWindStatusSpeed />
			<WeatherHighlightsWindStatusDirection />
			<WeatherHighlightsWindStatusGust />
		</WeatherHighlightsItem>
	)
}

export default WeatherHighlightsWindStatus
