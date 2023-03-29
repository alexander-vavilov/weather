import React from 'react'
import { images } from '../../assets'

const WeatherForecastItemImage = ({ day }) => {
	return (
		<img
			src={images[day?.condition.code].day.img}
			className='select-none'
			width={40}
			draggable={false}
			alt='icon'
		/>
	)
}

export default WeatherForecastItemImage
