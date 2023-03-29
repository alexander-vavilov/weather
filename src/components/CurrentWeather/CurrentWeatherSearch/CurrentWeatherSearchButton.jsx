import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import { BsSearch } from 'react-icons/bs'

const CurrentWeatherSearchButton = ({ handleSearch }) => {
	const { isOpen, setIsOpen, value, suggestions, selectedIndex } =
		useContext(SearchContext)

	const handleClick = () => {
		isOpen && value.length && suggestions.length
			? handleSearch(suggestions[selectedIndex].GeoObject.Point.pos)
			: setIsOpen(!isOpen)
	}

	return (
		<div className='absolute flex flex-col items-center z-10'>
			<button
				type='button'
				onClick={() => handleClick()}
				className='p-3.5 bg-slate-800 rounded-full'
				tabIndex='-1'
			>
				<BsSearch size={20} />
			</button>
			{!isOpen && (
				<span className='hidden md:inline text-gray-300 text-2xs uppercase select-none'>
					ctrl+k
				</span>
			)}
		</div>
	)
}

export default CurrentWeatherSearchButton
