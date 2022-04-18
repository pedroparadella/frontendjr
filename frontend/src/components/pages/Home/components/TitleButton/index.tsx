// External libraries
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Styled
import {
	Container 
} from './styles'

interface TitleButtonProps {
	onClick: () => void
}

const TitleButton: React.FC<TitleButtonProps> = ({
	onClick
}) => {
	return (
		<Container>
			<h3>Resultado de busca</h3>
			<Button
				title='Novo Card'
				width='173px'
				height='48px'
				color={props => props.theme.colors.card_background}
				backgroundColor={props => props.theme.colors.orange_500}
				border='none'
				borderRadius='8px'
				fontSize='18px'
				fontWeight={500}
				onClick={onClick}
			/>
		</Container>
	)
}

export default TitleButton
