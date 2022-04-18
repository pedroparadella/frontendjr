// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../../../styles/breakpoint'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: 13px;

    font-size: 15px;
    font-weight: 600;
  }

  main {
    width: 100%;

    margin-top: 51px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mq({
		flexDirection: [
			'column',
			'column',
			'row',
			'row'
		]
	})}
  }
`

export const Circle = styled.div`
  width: 159px;
  height: 159px;

  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.red_025};

  border: 6px solid ${props => props.theme.colors.gray_300};
  border-radius: 75.5px;
`