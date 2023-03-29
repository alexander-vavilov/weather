import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

export const SearchContextProvider = ({ children }) => {
	const [suggestions, setSuggestions] = useState([])
	const [value, setValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<SearchContext.Provider
			value={{
				suggestions,
				setSuggestions,
				value,
				setValue,
				isOpen,
				setIsOpen,
				isLoading,
				setIsLoading,
				selectedIndex,
				setSelectedIndex,
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}
