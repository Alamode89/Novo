/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				outfit: ["var(--font-outfit)", "sans-serif"],
			},
			fontSize: {
				sm: "0.75rem",
				md: "0.9rem",
			},
			colors: {
				novo: {
					purple: "#7231F3",
					selectPurple: "#8763FE",
					lightpurple: "#F3EFFF",
					darkpurple: "#5F1FDE",
					lightgray: "#EDEDED",
				},
			},
		},
	},
	plugins: [],
};
