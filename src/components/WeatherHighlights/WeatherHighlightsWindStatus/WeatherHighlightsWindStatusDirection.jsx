import React, { useContext } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import { WeatherContext } from '../../../contexts/WeatherContext'

const WeatherHighlightsWindStatusDirection = () => {
	const { currentWeather } = useContext(WeatherContext)

	return (
		<div className='flex items-center text-gray-300'>
			<p>Direction: {currentWeather.wind_degree}deg</p>
			<BsArrowUpShort
				size={28}
				style={{
					transform: `rotate(${currentWeather.wind_degree}deg)`,
				}}
			/>
			<span className='text-xs'>({currentWeather.wind_dir})</span>
		</div>
	)
}

export default WeatherHighlightsWindStatusDirection
