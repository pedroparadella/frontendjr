// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../styles/breakpoint'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ImageContent = styled.div`
  width: 100%;

  img {
    width: 100%;
    ${mq({
		display: [
			'none',
			'none',
			'flex',
			'flex'
		]
	})}
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  ${mq({
		maxWidth: [
			'768px',
			'768px',
			'768px',
			'1046px'
		],
		paddingTop: [
			'64px',
			'64px',
			'0',
			'0'
		],
		paddingLeft: [
			'1rem',
			'1rem',
			'2rem',
			'2rem'
		],
		paddingRight: [
			'1rem',
			'1rem',
			'2rem',
			'2rem'
		]
	})}
`

export const TextFieldContent = styled.div`
  width: fit-content;
  height: fit-content;
`
