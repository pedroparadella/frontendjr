// External libraries
import {
	Switch
} from '@mui/material'
import React, {
	useContext
} from 'react'

// Hooks
import {
	DarkLightContext
} from '../../../hooks/contexts/DarkLightContext'

// Styled
import {
	Container
} from './styles'

const Header: React.FC = () => {
	const {
		checked, setChecked
	} = useContext(DarkLightContext)

	const handleChange = () => setChecked(!checked)

	return (
		<Container>
			<img src='/images/logo-teste.svg' alt='logo' />
			<Switch 
				checked={checked}
				onChange={handleChange}
				color='default'
			/>
		</Container>
	)
}

export default Header