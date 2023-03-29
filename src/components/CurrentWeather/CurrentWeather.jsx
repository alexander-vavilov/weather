import React, { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import CurrentWeatherLoadingOverlap from './CurrentWeatherLoadingOverlap'
import CurrentWeatherSearch from './CurrentWeatherSearch/CurrentWeatherSearch'
import CurrentWeatherSuggestions from './CurrentWeatherSuggestions/CurrentWeatherSuggestions'
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails'
import CurrentWeatherInformation from './CurrentWeatherInformation/CurrentWeatherInformation'
import BackgroundWrapper from '../BackgroundWrapper'

const CurrentWeather = ({ handleSearch }) => {
	const { isOpen, setIsOpen, isLoading } = useContext(SearchContext)
	const searchRef = useRef(null)

	// handle click away
	useEffect(() => {
		const handleClickAway = e => {
			if (isOpen && !searchRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
		}
		// eslint-disable-next-line
	}, [isOpen])

	// handle open search by shortcut
	useEffect(() => {
		const handleOpenSearchByShortcut = e => {
			if (e.keyCode === 75 && (e.ctrlKey || e.metaKey)) {
				e.preventDefault()
				setIsOpen(!isOpen)
			}
		}

		document.addEventListener('keydown', handleOpenSearchByShortcut)

		return () => {
			document.removeEventListener('keydown', handleOpenSearchByShortcut)
		}

		// eslint-disable-next-line
	}, [isOpen])

	return (
		<BackgroundWrapper className='relative xl:flex-none xl:basis-1/5 min-w-[280px]'>
			<CurrentWeatherInformation />
			<CurrentWeatherDetails />
			<div
				ref={searchRef}
				className={`absolute top-5 left-1/2 -translate-x-1/2 w-full px-5 flex flex-col items-end rounded-full`}
			>
				<CurrentWeatherSearch handleSearch={handleSearch} />
				{isOpen && <CurrentWeatherSuggestions handleSearch={handleSearch} />}
			</div>
			{isLoading && <CurrentWeatherLoadingOverlap />}
		</BackgroundWrapper>
	)
}

export default CurrentWeather
