import { createContext, useState } from 'react'

export const WeatherContext = createContext(null)

export const WeatherContextProvider = ({ children }) => {
	const [currentWeather, setCurrentWeather] = useState()
	const [weatherForecast, setWeatherForecast] = useState()
	const [location, setLocation] = useState()
	const [astronomy, setAstronomy] = useState()

	return (
		<WeatherContext.Provider
			value={{
				currentWeather,
				setCurrentWeather,
				weatherForecast,
				setWeatherForecast,
				location,
				setLocation,
				astronomy,
				setAstronomy,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}
