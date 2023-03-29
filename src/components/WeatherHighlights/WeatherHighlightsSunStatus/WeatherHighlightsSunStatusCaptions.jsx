import React from 'react'
import WeatherHighlightsSunStatusCaption from './WeatherHighlightsSunStatusCaption'

const WeatherHighlightsSunStatusCaptions = ({
	unixSunriseTime,
	unixSunsetTime,
}) => {
	const sunriseTime = new Date(unixSunriseTime * 1000)
		.toLocaleTimeString('ru')
		.replace(/(.*)\D\d+/, '$1')
	const sunsetTime = new Date(unixSunsetTime * 1000)
		.toLocaleTimeString('ru')
		.replace(/(.*)\D\d+/, '$1')

	return (
		<div className='flex justify-between pt-4 text-yellow-500 capitalize'>
			<WeatherHighlightsSunStatusCaption time={sunriseTime} title='sunrise' />
			<WeatherHighlightsSunStatusCaption time={sunsetTime} title='sunset' />
		</div>
	)
}

export default WeatherHighlightsSunStatusCaptions
