import React, { useContext } from 'react'
import { images } from '../../../assets'
import { WeatherContext } from '../../../contexts/WeatherContext'

const CurrentWeatherInformationDescription = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<div className='flex gap-1'>
			<div className='text-2xl'>
				{images[currentWeather.condition.code].day.icon}
			</div>
			<p className='leading-tight'>{currentWeather.condition.text}</p>
		</div>
	)
}

export default CurrentWeatherInformationDescription
