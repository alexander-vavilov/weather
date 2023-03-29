import React from 'react'
import Loader from '../Loader'

const CurrentWeatherLoadingOverlap = () => {
	return (
		<div className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 rounded-2xl'>
			<Loader />
		</div>
	)
}

export default CurrentWeatherLoadingOverlap
