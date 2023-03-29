import React from 'react'
import BackgroundWrapper from '../BackgroundWrapper'
import WeatherHighlightsFeelsLike from './WeatherHighlightsFeelsLike/WeatherHighlightsFeelsLike'
import WeatherHighlightsOther from './WeatherHighlightsOther'
import WeatherHighlightsSunStatus from './WeatherHighlightsSunStatus/WeatherHighlightsSunStatus'
import WeatherHighlightsWindStatus from './WeatherHighlightsWindStatus/WeatherHighlightsWindStatus'

const WeatherHighlights = () => {
	return (
		<BackgroundWrapper className='order-3 xl:order-none'>
			<h2 className='pb-2 text-sm capitalize'>today's highlights</h2>
			<div className='flex flex-col md:flex-row gap-4 lg:gap-6'>
				<div className='flex flex-col xs:flex-row md:flex-col basis-1/3 gap-3'>
					<WeatherHighlightsWindStatus />
					<WeatherHighlightsFeelsLike />
				</div>
				<div className='flex flex-col xs:flex-row basis-2/3 gap-3 lg:gap-6'>
					<WeatherHighlightsSunStatus />
					<WeatherHighlightsOther />
				</div>
			</div>
		</BackgroundWrapper>
	)
}

export default WeatherHighlights
