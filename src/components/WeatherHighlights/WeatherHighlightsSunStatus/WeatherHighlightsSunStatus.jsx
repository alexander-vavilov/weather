import moment from 'moment'
import React, { useContext } from 'react'
import { WeatherContext } from '../../../contexts/WeatherContext'
import WeatherHighlightsItem from '../WeatherHighlightsItem'
import WeatherHighlightsSunStatusCaptions from './WeatherHighlightsSunStatusCaptions'
import WeatherHighlightsSunStatusProgressBar from './WeatherHighlightsSunStatusProgressBar'

const WeatherHighlightsSunStatus = () => {
	const { astronomy } = useContext(WeatherContext)

	const timeFormat = 'h:mm A'
	const unixSunriseTime = moment(astronomy?.sunrise, timeFormat).unix()
	const unixSunsetTime = moment(astronomy?.sunset, timeFormat).unix()

	return (
		<WeatherHighlightsItem title='sunrise & sunset'>
			<WeatherHighlightsSunStatusProgressBar
				unixSunriseTime={unixSunriseTime}
				unixSunsetTime={unixSunsetTime}
			/>
			<WeatherHighlightsSunStatusCaptions
				unixSunriseTime={unixSunriseTime}
				unixSunsetTime={unixSunsetTime}
			/>
		</WeatherHighlightsItem>
	)
}

export default WeatherHighlightsSunStatus
