import React from 'react'
import BackgroundWrapper from '../BackgroundWrapper'
import WeatherForecastItems from './WeatherForecastItems'

const WeatherForecast = () => {
	return (
		<BackgroundWrapper className='xl:flex-none'>
			<WeatherForecastItems />
		</BackgroundWrapper>
	)
}

export default WeatherForecast
