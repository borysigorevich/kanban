/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				red: '#EA5555',
				black: '#000112',
				purple: '#635FC7',
			},
		},
		colors: {
			'red-light': '#FF9898',
			'gray-light': '#F4F7FD',
			light: '#E4EBFA',
			'medium-gray': '#828FA3',
			dark: '#3E3F4E',
			'dark-gray': '#2B2C37',
			'very-dark-gray': '#20212C',
			'purple-light': '#A8A4FF',
		},
	},
	plugins: [],
};
