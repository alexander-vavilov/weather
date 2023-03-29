import React from 'react'
import CurrentWeatherDetailsLocation from './CurrentWeatherDetailsLocation'
import CurrentWeatherDetailsDate from './CurrentWeatherDetailsDate'

const CurrentWeatherDetails = () => {
	return (
		<div className='text-gray-300'>
			<CurrentWeatherDetailsLocation />
			<CurrentWeatherDetailsDate />
		</div>
	)
}

export default CurrentWeatherDetails
