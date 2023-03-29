import React, { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'
import WeatherForecastItem from './WeatherForecastItem'

const WeatherForecastItems = () => {
	const { weatherForecast } = useContext(WeatherContext)

	return (
		<div className='flex flex-col justify-between gap-2 h-full'>
			{weatherForecast?.map(({ date_epoch, day }) => {
				const date = new Date(date_epoch * 1000)
				const dayMonth = date.toLocaleDateString('ru', {
					day: 'numeric',
					month: 'long',
				})
				const weekday = date.toLocaleDateString('ru', {
					weekday: 'long',
				})

				return (
					<WeatherForecastItem
						key={date_epoch}
						day={day}
						dayMonth={dayMonth}
						weekday={weekday}
					/>
				)
			})}
		</div>
	)
}

export default WeatherForecastItems
