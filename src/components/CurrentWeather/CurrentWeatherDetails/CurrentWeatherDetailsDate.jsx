import React, { useContext } from 'react'
import { WeatherContext } from '../../../contexts/WeatherContext'
import { IoCalendarOutline } from 'react-icons/io5'

const CurrentWeatherDetailsDate = () => {
	const { currentWeather } = useContext(WeatherContext)

	const calculations = new Date(currentWeather?.last_updated_epoch * 1000)
	const calculationsDate = calculations.toDateString()
	const calculationsTime = calculations
		.toLocaleTimeString()
		.replace(/(.*)\D\d+/, '$1')

	return (
		<div className='flex items-center gap-1 text-sm'>
			<IoCalendarOutline size={18} />
			<span>{calculationsDate}</span>
			<span className='text-white font-semibold'>{calculationsTime}</span>
		</div>
	)
}

export default CurrentWeatherDetailsDate
