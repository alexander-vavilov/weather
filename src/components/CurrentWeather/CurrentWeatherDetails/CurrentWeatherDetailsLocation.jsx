import React, { useContext } from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { WeatherContext } from '../../../contexts/WeatherContext'

const CurrentWeatherDetailsLocation = () => {
	const { location } = useContext(WeatherContext)

	return (
		<div className='flex items-center gap-1 pb-2'>
			<BsGeoAlt size={18} />
			<span>
				{location.name}, {location.country}
			</span>
		</div>
	)
}

export default CurrentWeatherDetailsLocation
