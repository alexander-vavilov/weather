import React from 'react'
import WeatherHighlightsItem from '../WeatherHighlightsItem'
import WeatherHighlightsFeelsLikeDescription from './WeatherHighlightsFeelsLikeDescription'
import WeatherHighlightsFeelsLikeTemperature from './WeatherHighlightsFeelsLikeTemperature'

const WeatherHighlightsFeelsLike = () => {
	return (
		<WeatherHighlightsItem title='feels like'>
			<div className='flex justify-between items-center gap-4'>
				<WeatherHighlightsFeelsLikeTemperature />
				<WeatherHighlightsFeelsLikeDescription />
			</div>
		</WeatherHighlightsItem>
	)
}

export default WeatherHighlightsFeelsLike
