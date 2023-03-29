import React, { useContext } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { WeatherContext } from '../../../contexts/WeatherContext'

const WeatherHighlightsSunStatusProgressbar = ({
	unixSunriseTime,
	unixSunsetTime,
}) => {
	const { location } = useContext(WeatherContext)
	// const localTime = new Date(location?.localtime_epoch * 1000)
	// const timeOfDay = location?.localtime_epoch > unixSunsetTime ? 'night' : 'day'

	const elapsedTime = location?.localtime_epoch - unixSunriseTime

	const sunDuration = unixSunsetTime - unixSunriseTime
	const sunPercentage =
		(elapsedTime / sunDuration) * 100 > 100 ||
		(elapsedTime / sunDuration) * 100 < 0
			? 100
			: (elapsedTime / sunDuration) * 100

	console.log(`sun percentage ${sunPercentage}`)

	return (
		<div className='relative h-28 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:bg-opacity-50 overflow-hidden'>
			<div className='h-full pt-3 overflow-hidden'>
				<div className='absolute left-1/2 -translate-x-1/2 w-48 h-48 mx-auto border-2 border-white border-opacity-50 border-dashed rounded-full'>
					<div
						className='absolute w-full h-full rounded-full border-[15px] border-transparent z-10'
						style={{
							clip: 'rect(0, 50px, 100px, 0)',
							rotate: `${-45 + 1.8 * sunPercentage}deg`,
						}}
					>
						<BsFillSunFill className='text-yellow-500 text-2xl' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherHighlightsSunStatusProgressbar
