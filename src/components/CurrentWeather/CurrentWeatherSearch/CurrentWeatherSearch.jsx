import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import CurrentWeatherSearchButton from './CurrentWeatherSearchButton'
import CurrentWeatherSearchField from './CurrentWeatherSearchField'

const CurrentWeatherSearch = ({ handleSearch }) => {
	const { isOpen } = useContext(SearchContext)

	return (
		<div className='relative flex justify-end w-full h-12'>
			{isOpen && <CurrentWeatherSearchField handleSearch={handleSearch} />}
			<CurrentWeatherSearchButton handleSearch={handleSearch} />
		</div>
	)
}

export default CurrentWeatherSearch
