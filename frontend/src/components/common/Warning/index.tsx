// External libraries
import React from 'react'
import ReactModal from 'react-modal'

// Components
import Button from '../../common/Button'

// Styled
import {
	Container 
} from './styles'

interface WarningProps {
	warning: string
  isOpen: boolean
  onRequestClose: () => void
}

const Warning: React.FC<WarningProps> = ({
	warning,
	isOpen,
	onRequestClose
}) => {
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
				<h4>AVISO</h4>
				<p>{warning}</p>
				<Button
					title='OK'
					width='fit-content'
					height='48px'
					paddingHorizontal='24px'
					color={props => props.theme.colors.orange_500}
					backgroundColor={props => props.theme.colors.card_background}
					border='1px solid #E76316'
					borderRadius='8px'
					fontSize='18px'
					fontWeight={600}
					onClick={onRequestClose}
				/>
			</Container>
		</ReactModal>
	)
}

export default Warning