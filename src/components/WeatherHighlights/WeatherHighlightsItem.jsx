import React from 'react'
import WeatherHighlightsTitle from './WeatherHighlightsTitle'

const WeatherHighlightsItem = ({ children, title }) => {
	return (
		<div className='basis-1/2 p-3 bg-neutral-800 bg-opacity-60 text-gray-300 rounded-2xl'>
			<WeatherHighlightsTitle>{title}</WeatherHighlightsTitle>
			{children}
		</div>
	)
}

export default WeatherHighlightsItem
