module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'fundo-busca': "url('/fundo-busca.png')",
			},
		},
	},
	plugins: [],
};
