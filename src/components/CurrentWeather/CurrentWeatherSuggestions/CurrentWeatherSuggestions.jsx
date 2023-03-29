import React, { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import CurrentWeatherSuggestion from './CurrentWeatherSuggestion'

const CurrentWeatherSuggestions = ({ handleSearch }) => {
	const { suggestions, selectedIndex } = useContext(SearchContext)
	const suggestionsRef = useRef(null)

	// scroll into view list
	const handleScrollIntoView = () => {
		const selectedElement = suggestionsRef.current?.children[selectedIndex]
		selectedElement?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		})
	}
	useEffect(() => {
		const unsub = handleScrollIntoView

		return () => {
			unsub()
		}

		// eslint-disable-next-line
	}, [selectedIndex])

	return (
		<ul
			ref={suggestionsRef}
			className='flex flex-col w-full max-h-80 rounded-b-2xl divide-y divide-gray-300 divide-opacity-40 overflow-overlay apple-scrollbar'
			tabIndex={0}
		>
			{suggestions?.map(({ GeoObject }, index) => (
				<CurrentWeatherSuggestion
					key={GeoObject.Point.pos}
					GeoObject={GeoObject}
					index={index}
					handleSearch={handleSearch}
				/>
			))}
		</ul>
	)
}

export default CurrentWeatherSuggestions
