// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../../../styles/breakpoint'

export const Container = styled.div`
  width: 100%;

  margin-top: 32px;
  margin-bottom: 34px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    ${mq({
		marginTop: [
			'16px',
			'16px',
			'0',
			'0'
		],
		fontSize: [
			'24px',
			'24px',
			'32px',
			'32px'
		]
	})}
  }

  ${mq({
		flexDirection: [
			'column-reverse',
			'column-reverse',
			'row',
			'row'
		]
	})}
`
