import React from 'react'
import CurrentWeatherInformationDescription from './CurrentWeatherInformationDescription'
import CurrentWeatherInformationImage from './CurrentWeatherInformationImage'
import CurrentWeatherInformationTemperature from './CurrentWeatherInformationTemperature'

const CurrentWeatherInformation = () => {
	return (
		<div className='relative py-8 before:absolute before:bottom-0 before:w-full before:h-px before:bg-slate-600 before:my-4'>
			<CurrentWeatherInformationImage />
			<CurrentWeatherInformationTemperature />
			<CurrentWeatherInformationDescription />
		</div>
	)
}

export default CurrentWeatherInformation
