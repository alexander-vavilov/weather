import React, { useContext } from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { SearchContext } from '../../../contexts/SearchContext'

const CurrentWeatherSuggestion = ({ GeoObject, index, handleSearch }) => {
	const { selectedIndex } = useContext(SearchContext)

	return (
		<li
			onClick={() => handleSearch(GeoObject.Point.pos)}
			className={`p-2 ${
				selectedIndex === index ? 'bg-slate-700' : 'bg-slate-800'
			} text-sm leading-tight hover:bg-slate-700 cursor-pointer apple-scrollbar transition-colors duration-300`}
		>
			<div className='flex gap-1'>
				<div className='text-gray-300 min-w-max mt-0.5'>
					<BsGeoAlt />
				</div>
				<span>{GeoObject.name}</span>
			</div>
			<span className='text-gray-300 text-xs'>{GeoObject.description}</span>
		</li>
	)
}

export default CurrentWeatherSuggestion
