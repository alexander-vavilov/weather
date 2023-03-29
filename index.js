import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { SearchContextProvider } from './contexts/SearchContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<WeatherContextProvider>
			<SearchContextProvider>
				<App />
			</SearchContextProvider>
		</WeatherContextProvider>
	</React.StrictMode>
)

reportWebVitals()
