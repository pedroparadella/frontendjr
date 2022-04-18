// External libraries
import React, {
	useEffect,
	useState
} from 'react'

// Components
import CreateCard from '../CreateCard'
import DeleteCard from '../DeleteCard'
import EditCard from '../EditCard'

// Services
import api from '../../../../../services/api'
import apijson from '../../../../../services/api.json'

// Styled
import {
	Circle,
	Container, 
	ContentGrid, 
	FooterCard, 
	ItemCard, 
	NoData,
	SearchContent,
	StyledTextInput
} from './styles'
import TitleButton from '../TitleButton'

const CardsGrid: React.FC = () => {
	const [ id, setId ] = useState('')
	const [ cards, setCards ] = useState([])
	const [ search, setSearch ] = useState('')
	
	const [ isOpenCreateCard, setIsOpenCreateCard ] = useState(false)
	const [ isOpenDeleteCard, setIsOpenDeleteCard ] = useState(false)
	const [ isOpenEditCard, setIsOpenEditCard ] = useState(false)
	
	const handleCloseCreateCard = () => setIsOpenCreateCard(false)
	const handleCloseDeleteCard = () => setIsOpenDeleteCard(false)
	const handleCloseEditCard = () => setIsOpenEditCard(false)

	const handleOpenDeleteCard = (id) => {
		setIsOpenDeleteCard(true)
		setId(id)
	}

	const handleOpenEditCard = (id) => {
		setIsOpenEditCard(true)
		setId(id)
	}

	useEffect(() => {
		api
			.get('/cards')
			.then((response) => {
				setCards(response.data)
			})
			.catch((err) => {
				console.error('Opa! Parece que houve um erro em ', err)
				setCards(apijson.cards)
			})
	}, [
		isOpenCreateCard,
		isOpenDeleteCard,
		isOpenEditCard 
	])
	
	return (
		<Container>
			<SearchContent>
				<StyledTextInput
					id='outlined-basic'
					placeholder='Digite aqui a sua busca'
					value={search}
					onChange={event => setSearch(event.target.value)}
				/>
			</SearchContent>
			<TitleButton onClick={() => setIsOpenCreateCard(true)} />
			<ContentGrid>
				{cards.filter((filteredCards) => {
					if (search === '') return filteredCards
					else if (filteredCards.message.toLowerCase().includes(search.toLowerCase())) 
						return filteredCards
				}).map((card) => {
					return (
						<ItemCard key={card.id}>
							<Circle>
								<img src='/images/hand.svg' alt='hand' />
							</Circle>
							<p><span>{card.message}</span></p>
							<FooterCard>
								<button onClick={() => handleOpenDeleteCard(card.id)}>
									<img src='/images/icon-trash.svg' alt='trash' />
									<p><span className='delete'>Excluir</span></p>
								</button>
								<button onClick={() => handleOpenEditCard(card.id)}>
									<img src='/images/icon-edit.svg' alt='edit' />
									<p><span className='edit'>Editar</span></p>
								</button>
							</FooterCard>
						</ItemCard>
					)
				})}
				{cards.length === 0 && <NoData>Opa! Parece que não há cards para mostrar :/ <br /> Tente adicionar um!</NoData>}
			</ContentGrid>
			<CreateCard
				isOpen={isOpenCreateCard}
				onRequestClose={handleCloseCreateCard}
			/>
			<DeleteCard
				id={id}
				isOpen={isOpenDeleteCard}
				onRequestClose={handleCloseDeleteCard}
			/>
			<EditCard
				id={id}
				isOpen={isOpenEditCard}
				onRequestClose={handleCloseEditCard}
			/>
		</Container>
	)
}

export default CardsGrid