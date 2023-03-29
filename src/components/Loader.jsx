import React from 'react'
import LoaderGif from '../assets/loader.gif'

const Loader = () => {
	return (
		<img
			src={LoaderGif}
			className='select-none'
			draggable={false}
			width={80}
			alt='Loading...'
		/>
	)
}

export default Loader
