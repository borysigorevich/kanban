/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				red: '#EA5555',
				black: '#000112',
				purple: '#635FC7',
				'red-light': '#FF9898',
				'gray-light': '#F4F7FD',
				light: '#E4EBFA',
				'gray-medium': '#828FA3',
				dark: '#3E3F4E',
				'gray-dark': '#2B2C37',
				'gray-very-dark': '#20212C',
				'purple-light': '#A8A4FF',
			},
		},
	},
	plugins: [],
};
