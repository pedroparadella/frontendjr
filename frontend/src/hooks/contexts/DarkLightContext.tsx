// External libraries
import {
	createContext, 
	useEffect, 
	useState 
} from 'react'
import {
	ThemeProvider 
} from 'styled-components'

// Styled
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

interface DarkLightContextProps {
  theme: object
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  // handleChange: (checked, setChecked) => void
}

export const DarkLightContext = createContext<DarkLightContextProps>({} as DarkLightContextProps)

export const DarkLightProvider = ({
	children 
}) => {
	const [ theme, setTheme ] = useState(light)
	const [ checked, setChecked ] = useState(true)

	useEffect(() => {
		if (checked) setTheme(light)
		else setTheme(dark)
	}, [ checked ])

	return (
		<DarkLightContext.Provider value={{
			theme,
			checked,
			setChecked
		}}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</DarkLightContext.Provider>
	)
}