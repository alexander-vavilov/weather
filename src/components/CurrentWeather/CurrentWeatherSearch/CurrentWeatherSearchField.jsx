import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'

const CurrentWeatherSearchField = ({ handleSearch }) => {
	const {
		value,
		setValue,
		suggestions,
		setSuggestions,
		selectedIndex,
		setSelectedIndex,
	} = useContext(SearchContext)

	const yandexGeocoderApiUrl = 'https://geocode-maps.yandex.ru/1.x/'
	const yandexGeocoderApiKey = process.env.REACT_APP_YANDEX_GEOCODER_API_KEY

	const geocoderCache = setupCache({
		maxAge: 30 * 60 * 1000,
	})
	const geocoderApi = axios.create({
		adapter: geocoderCache.adapter,
	})

	const handleGetSuggestions = () => {
		geocoderApi
			.get(yandexGeocoderApiUrl, {
				params: {
					format: 'json',
					apikey: yandexGeocoderApiKey,
					geocode: value,
				},
			})
			.then(({ data }) => {
				const featureMember = data.response.GeoObjectCollection.featureMember

				if (featureMember.length) {
					setSuggestions(data.response.GeoObjectCollection.featureMember)
					setSelectedIndex(0)
				}
			})
			.catch(error => console.log(error))
	}

	const handleInputChange = e => {
		setValue(e.target.value)
		handleGetSuggestions()
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter' && value.length && suggestions.length) {
			handleSearch(suggestions[selectedIndex].GeoObject.Point.pos)
		} else if ((e.keyCode === 40) & (selectedIndex < suggestions?.length - 1)) {
			setSelectedIndex(selectedIndex + 1)
		} else if ((e.keyCode === 38) & (selectedIndex > 0)) {
			setSelectedIndex(selectedIndex - 1)
		}
	}

	return (
		<input
			type='text'
			value={value}
			onChange={handleInputChange}
			onKeyDown={handleKeyDown}
			className={`bg-slate-800 px-3.5 w-full ${
				suggestions.length ? 'rounded-t-3xl' : 'rounded-3xl'
			} outline-none transition-all duration-300`}
			placeholder='Search...'
			autoFocus
		/>
	)
}

export default CurrentWeatherSearchField
