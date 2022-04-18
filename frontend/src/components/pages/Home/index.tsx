// External libraries
import React from 'react'

// Components
import Header from '../../../components/common/Header'
import CardsGrid from './components/CardsGrid'

// Styled
import {
	Container,
	Content,
	ImageContent
} from './styles'

const Home: React.FC = () => {
	return (
		<Container>
			<ImageContent>
				<img src='/images/fundo-busca.png' alt='peoples' />
			</ImageContent>
			<Content>
				<CardsGrid />
			</Content>
			<Header />
		</Container>
	)
}

export default Home
