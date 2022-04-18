// External libraries
import React, {
	useEffect,
	useState 
} from 'react'
import ReactModal from 'react-modal'

// Components
import Button from '../../../../common/Button'
import Warning from '../../../../common/Warning'

// Services
import api from '../../../../../services/api'

// Styled
import {
	Circle,
	Container 
} from './styles'

interface DeleteCardProps {
	id: string
  isOpen: boolean
  onRequestClose: () => void
}

const DeleteCard: React.FC<DeleteCardProps> = ({
	id,
	isOpen,
	onRequestClose
}) => {
	const [ isOpenWarning, setIsOpenWarning ] = useState(false)
	
	const handleCloseWarning = () => setIsOpenWarning(false)

	const handleDeleteCard = async () => {
		await api
			.delete(`/cards/${id}`)
			.then(() => onRequestClose())
			.catch(() => setIsOpenWarning(true))
	}
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className='react-modal-content-delete'
			overlayClassName='react-modal-overlay'
		>
			<button 
				type='button' 
				onClick={onRequestClose}
				className='react-modal-close'
			>
				<img src='/images/icon-x.png' alt='x' width={14} height={14} />
			</button>
			<Container>
				<Circle>
					<img src='/images/icon-trash.svg' width={68} height={68} alt='big-trash' />
				</Circle>
				<h2>Excluir</h2>
				<p>CERTEZA QUE DESEJA EXCLUIR?</p>
				<main>
					<Button
						title='Excluir'
						width='158px'
						height='48px'
						color={props => props.theme.colors.card_background}
						backgroundColor={props => props.theme.colors.red_500}
						border='none'
						borderRadius='8px'
						fontSize='18px'
						fontWeight={600}
						onClick={handleDeleteCard}
					/>
					<Button
						title='Cancelar'
						width='158px'
						height='48px'
						color={props => props.theme.colors.red_500}
						backgroundColor={props => props.theme.colors.card_background}
						border='1px solid #DB2525'
						borderRadius='8px'
						fontSize='18px'
						fontWeight={600}
						onClick={onRequestClose}
					/>
				</main>
			</Container>
			<Warning
				warning={'Esta função não está diponível no momento, tente mais tarde!'}
				isOpen={isOpenWarning}
				onRequestClose={handleCloseWarning}
			/>
		</ReactModal>
	)
}

export default DeleteCard