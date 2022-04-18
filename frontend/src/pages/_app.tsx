// External libraries
import React from 'react'
import {
	AppProps 
} from 'next/app'

// Hooks
import {
	DarkLightProvider 
} from '../hooks/contexts/DarkLightContext'

// Styled
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({
	Component, pageProps 
}) => {
	return (
		<DarkLightProvider>
			<Component {...pageProps} />
			<GlobalStyle />
		</DarkLightProvider>
	)
}

export default MyApp
