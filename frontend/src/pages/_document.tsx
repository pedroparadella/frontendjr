import React from 'react'
import Document, {
	DocumentInitialProps, 
	Head, 
	Html, 
	Main, 
	NextScript 
} from 'next/document'
import {
	ServerStyleSheet 
} from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}

	render() : JSX.Element {
		return (
			<Html lang='pt-br'>
				<Head>
					<link rel="stylesheet" href="https://use.typekit.net/fgo2oys.css" />
					<link rel='shortcut icon' href='https://reactjs.org/favicon.ico' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
