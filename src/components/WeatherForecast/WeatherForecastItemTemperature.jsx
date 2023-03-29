import React from 'react'

const WeatherForecastItemTemperature = ({ day }) => {
	return (
		<span className='pl-3 text-white text-2xl'>
			{Math.round(day.avgtemp_c) > 0
				? `+${Math.round(day.avgtemp_c)}°`
				: `${Math.round(day.avgtemp_c)}°`}
		</span>
	)
}

export default WeatherForecastItemTemperature
