import React from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs'

const WeatherHighlightsSunStatusCaption = ({ title, time }) => {
	const Icon = title === 'sunrise' ? BsSunrise : BsSunset

	return (
		<div className='flex flex-col'>
			<Icon className={title === 'sunset' ? 'ml-auto' : 'mr-auto'} size={18} />
			<div className={`flex flex-col ${title === 'sunset' ? 'text-end' : ''}`}>
				<span className='text-sm'>{title}</span>
				<span className='text-white text-xs font-semibold'>{time}</span>
			</div>
		</div>
	)
}

export default WeatherHighlightsSunStatusCaption
