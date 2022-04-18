// External libraries
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

// Styled
import mq from '../../../../../styles/breakpoint'

export const ContainerForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;

  main {
    width: 100%;

    display: flex;
    align-items: center;

    h3 {
      font-weight: 600;
    }

    img {
      margin-right: 18px;
    }

    ${mq({
		marginTop: [
			'0px',
			'0px',
			'10.22px',
			'10.22px'
		],
		paddingBottom: [
			'5px',
			'5px',
			'32.49px',
			'32.49px'
		]
	})}
  }

  p {
    margin-bottom: 11.78px;

    font-size: 15px;
    font-weight: 600;
  }

  .paragraph {
    margin-top: 50.22px;
  }
`

export const SelectFile = styled.button`
  height: 60px;

  padding-left: 16px;
  padding-right: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${props => props.theme.colors.card_background};
  border: 1px solid ${props => props.theme.colors.gray_550};
  border-radius: 8px;
  
  b {
    font-weight: 300;
    color: ${props => props.theme.colors.gray_700};
  }

  ${mq({
		cursor: [
			'none',
			'none',
			'pointer',
			'pointer'
		]
	})}
`

export const Content = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 43.29px;
  padding-bottom: 51.22px;

  display: flex;
  flex-direction: column;

  border-top: 1px solid ${props => props.theme.colors.gray_500};
  border-bottom: 1px solid ${props => props.theme.colors.gray_500};
`

export const StyledTextInput = styled(TextField)({
	width: '100%',
	backgroundColor: '#FFF',
	borderRadius: 6
})
