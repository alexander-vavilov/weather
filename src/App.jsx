import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import { WeatherContext } from './contexts/WeatherContext'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { SearchContext } from './contexts/SearchContext'
import WeatherHighlights from './components/WeatherHighlights/WeatherHighlights'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import WeatherMap from './components/WeatherMap'
import Loader from './components/Loader'

const App = () => {
	const {
		currentWeather,
		setCurrentWeather,
		setWeatherForecast,
		setLocation,
		setAstronomy,
	} = useContext(WeatherContext)

	const { setIsOpen, setValue, setSuggestions, setIsLoading } =
		useContext(SearchContext)

	const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY
	const weatherApiUrl = 'https://api.weatherapi.com/v1'
	const lang = 'ru'

	// set user location
	useEffect(() => {
		const successCallback = geolocation => {
			const lat = geolocation.coords.latitude
			const lon = geolocation.coords.longitude
			const pos = `${lat},${lon}`

			handleSearch(pos)
		}

		const alternativeCode = () => {
			axios
				.get('https://ipapi.co/json/')
				.then(({ data }) => handleSearch(data.ip))
				.catch(error => console.log(error))
		}

		const errorCallback = error => {
			if (error.code === error.PERMISSION_DENIED) {
				alternativeCode()
			}
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
		} else {
			alternativeCode()
		}
		// eslint-disable-next-line
	}, [])

	const handleGetWeather = query => {
		setIsLoading(true)

		weatherApi
			.get(`${weatherApiUrl}/forecast.json`, {
				params: {
					q: query,
					lang: lang,
					days: 8,
					key: weatherApiKey,
				},
			})
			.then(({ data }) => {
				setCurrentWeather(data.current)

				const forecastArr = data.forecast.forecastday
				forecastArr.shift()

				setWeatherForecast(forecastArr)
				setLocation(data.location)
			})
			.catch(error => console.log(error))
			.finally(() => {
				setIsOpen(false)
				setValue('')
				setSuggestions([])
				setIsLoading(false)
			})
	}

	const handleGetAstronomy = query => {
		weatherApi
			.get(`${weatherApiUrl}/astronomy.json`, {
				params: {
					q: query,
					lang: lang,
					dt: new Date().toLocaleDateString(),
					key: weatherApiKey,
				},
			})
			.then(({ data }) => {
				setAstronomy(data.astronomy.astro)
			})
			.catch(error => console.error(error))
	}

	const handleSearch = query => {
		const reversedQuery = query.split(' ').reverse().join(',')

		handleGetWeather(reversedQuery)
		handleGetAstronomy(reversedQuery)
	}

	// axios cache instances
	const weatherCache = setupCache({
		maxAge: 5 * 60 * 1000,
	})
	const weatherApi = axios.create({
		adapter: weatherCache.adapter,
	})

	return (
		<div className='bg-main bg-cover bg-center bg-no-repeat'>
			<div className='w-full min-h-screen p-5 bg-slate-900 bg-opacity-80 backdrop-blur-md text-white'>
				{currentWeather ? (
					<div className='flex flex-wrap gap-4 h-full'>
						<CurrentWeather handleSearch={handleSearch} />
						<WeatherHighlights />
						<WeatherForecast />
						<WeatherMap />
					</div>
				) : (
					<div className='flex justify-center items-center h-screen -m-5'>
						<Loader />
					</div>
				)}
			</div>
		</div>
	)
}

export default App
