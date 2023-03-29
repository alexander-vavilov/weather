import React, { useContext } from 'react'
import { images } from '../assets'
import { WeatherContext } from '../contexts/WeatherContext'

const BackgroundWrapper = ({ children, className }) => {
	const { currentWeather } = useContext(WeatherContext)
	const background = images[currentWeather?.condition.code]?.background

	return (
		<div
			className={`relative flex flex-col flex-auto ${className} rounded-2xl overflow-hidden`}
		>
			<div className='flex-auto min-h-full min-w-full p-5'>{children}</div>
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
				<img
					src={background}
					className='w-full h-full object-cover object-center blur-md'
					alt='background'
				/>
			</div>
		</div>
	)
}

export default BackgroundWrapper
