const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			"primary": {
				light: "#570df8",
				DEFAULT: "#570df8",
				dark: "#661AE6",
			},
			"primary-content": {
				light: "#ffffff",
				DEFAULT: "#ffffff",
				dark: "#ffffff",
			},
			"secondary": {
				light: "#f000b8",
				DEFAULT: "#f000b8",
				dark: "#D926AA",
			},
			"secondary-content": {
				light: "#ffffff",
				DEFAULT: "#ffffff",
				dark: "#ffffff",
			},
			"accent": {
				light: "#37cdbe",
				DEFAULT: "#37cdbe",
				dark: "#1FB2A5",
			},
			"accent-content": {
				light: "#163835",
				DEFAULT: "#163835",
				dark: "#ffffff",
			},
			"neutral": {
				light: "#3d4451",
				DEFAULT: "#3d4451",
				dark: "#191D24",
			},
			"neutral-content": {
				light: "#ffffff",
				DEFAULT: "#ffffff",
				dark: "#A6ADBB",
			},
			"base-100": {
				light: "#ffffff",
				DEFAULT: "#ffffff",
				dark: "#2A303C",
			},
			"base-200": {
				light: "#F2F2F2",
				DEFAULT: "#F2F2F2",
				dark: "#242933",
			},
			"base-300": {
				light: "#E5E6E6",
				DEFAULT: "#E5E6E6",
				dark: "#20252E",
			},
			"base-content": {
				light: "#1f2937",
				DEFAULT: "#1f2937",
				dark: "#A6ADBB",
			},
		},
		extend: {}
	},

	plugins: [forms, typography]
};

module.exports = config;
