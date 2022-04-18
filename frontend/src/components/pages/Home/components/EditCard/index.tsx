// External libraries
import React, {
	useEffect,
	useState 
} from 'react'
import ReactModal from 'react-modal'

// Components
import Button from '../../../../common/Button'
import Warning from '../../../../common/Warning'

//Services
import api from '../../../../../services/api'

// Styled
import {
	ContainerForm, 
	Content, 
	SelectFile, 
	StyledTextInput 
} from './styles'

interface EditCardProps {
	id: string
  isOpen: boolean
  onRequestClose: () => void
}

const EditCard: React.FC<EditCardProps> = ({
	id,
	isOpen,
	onRequestClose
}) => {
	const [ message, setMessage ] = useState('')
	const [ statusTextField, setStatusTextField ] = useState(false)
	const [ isOpenWarning, setIsOpenWarning ] = useState(false)
	
	const handleCloseWarning = () => setIsOpenWarning(false)

	const onSubmit = async (event) => {
		event.preventDefault()
		if (message === '') setStatusTextField(true)
		else {
			await api
				.put(`/cards/${id}`, {
					message: message 
				})
				.then(() => {
					onRequestClose()
					setMessage('')
				})
				.catch((err) => {
					setIsOpenWarning(true)
					console.error('Opa! Parece que houve um erro em ', err)
				})
		}
	}

	useEffect(() => {
		setStatusTextField(false)
	}, [ message ])

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className='react-modal-content'
			overlayClassName='react-modal-overlay'
		>
			<ContainerForm onSubmit={onSubmit} action='/'>
				<main>
					<img src='/images/icon-create.svg' alt='create' />
					<h3>Editar card</h3>
				</main>
				<Content>
					<p>EDITE O NOME DO CARD</p>
					<StyledTextInput 
						error={statusTextField}
						id='outlined-basic'
						label='Digite um novo título'
						variant='outlined'
						value={message}
						onChange={event => setMessage(event.target.value)}
						inputProps={{
							maxLength: 30,
							minLength: 3
						}}
					/>
					<p className='paragraph'>EDITE A IMAGEM DO CARD</p>
					<SelectFile onClick={() => setIsOpenWarning(true)}>
						<b>NENHUM ARQUIVO SELECIONADO</b>
						<Button
							title='Escolher arquivo'
							width='100%'
							height='48px'
							maxWidth='224px'
							color={props => props.theme.colors.orange_500}
							backgroundColor={props => props.theme.colors.card_background}
							border='1px solid #E76316'
							borderRadius='8px'
							fontSize='18px'
							fontWeight={600}
							onClick={() => setIsOpenWarning(true)}
						/>
					</SelectFile>
				</Content>
				<Button
					title='Editar card'
					width='158px'
					height='48px'
					marginTop='26px'
					color={props => props.theme.colors.card_background}
					backgroundColor={props => props.theme.colors.orange_500}
					border='none'
					borderRadius='8px'
					fontSize='18px'
					fontWeight={600}
				/>
			</ContainerForm>
			<Warning
				warning={'Esta função não está diponível no momento, tente mais tarde!'}
				isOpen={isOpenWarning}
				onRequestClose={handleCloseWarning}
			/>
		</ReactModal>
	)
}

export default EditCard