import React from 'react'
import WeatherForecastItemImage from './WeatherForecastItemImage'
import WeatherForecastItemTemperature from './WeatherForecastItemTemperature'

const WeatherForecastItem = ({ day, dayMonth, weekday }) => {
	return (
		<div className='flex justify-between items-center gap-5 xs:gap-14 text-gray-300 text-sm whitespace-nowrap'>
			<div className='flex basis-1/3'>
				<WeatherForecastItemImage day={day} />
				<WeatherForecastItemTemperature day={day} />
			</div>
			<span>{dayMonth}</span>
			<span className='hidden xs:block text-end basis-1/3 capitalize'>
				{weekday}
			</span>
		</div>
	)
}

export default WeatherForecastItem
