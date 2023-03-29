module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				main: 'url(./assets/backgrounds/main-background.jpg)',
				sunny: 'url(./assets/backgrounds/sunny-background.jpg)',
				rainy: 'url(./assets/backgrounds/rainy-background.jpg)',
				snowy: 'url(./assets/backgrounds/snowy-background.jpg)',
				night: 'url(./assets/backgrounds/night-background.jpg)',
			},
			fontSize: {
				'2xs': '0.6rem',
			},
			screens: {
				xs: '576px',
			},
		},
		fontFamily: {
			'open-sans': 'Open Sans, sans-serif',
		},
	},
	plugins: [],
}
