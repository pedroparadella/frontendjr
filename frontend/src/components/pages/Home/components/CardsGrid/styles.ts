// External libraries
import {
	TextField 
} from '@mui/material'
import styled from 'styled-components'

// Styled
import mq from '../../../../../styles/breakpoint'

export const Container = styled.div`
  width: 100%;
  height: fit-content;

	padding-bottom: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
	flex-direction: column;
`

export const ContentGrid = styled.div`
	max-width: 1046px;
	display: grid;
	column-gap: 16px;
	row-gap: 16px;

  ${mq({
		gridTemplateColumns: [
			'auto',
			'auto auto',
			'auto auto auto',
			'auto auto auto auto'
		]
	})}

	@media (max-width: 768px) {
		width: 100%;
	}
`

export const ItemCard = styled.div`
  height: 267px;

	padding-top: 28px;
	padding-left: 22px;
	padding-right: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border: 1px solid ${props => props.theme.colors.gray_300};
  border-radius: 8px;

  box-shadow: 0px 3px 6px ${props => props.theme.colors.gray_350};

  background-color: ${props => props.theme.colors.card_background};

	overflow: hidden;
	overflow-wrap: break-word;

	p {
		text-align: center;
	}

  ${mq({
		width: [
			'100%',
			'100%',
			'234px',
			'234px'
		]
	})}
`

export const FooterCard = styled.div`
  width: 100%;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: space-around;

	border-top: 1px solid ${props => props.theme.colors.gray_300};

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;

		border: none;
		background: transparent;

		cursor: pointer;

		p {
			margin-left: 9.5px;
			
			span {
				font-size: 15px;
				opacity: 48%;
			}

			.delete {
				&:hover {
					opacity: 100%;
          transition: 0.4s;
          color: ${props => props.theme.colors.red_500}
        }
			}

			.edit {
				&:hover {
					opacity: 100%;
          transition: 0.4s;
          color: ${props => props.theme.colors.orange_500}
        }
			}
		}
	}
`

export const Circle = styled.div`
	width: 95px;
	height: 95px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid ${props => props.theme.colors.gray_300};
	border-radius: 47.5px;

	background-color: ${props => props.theme.colors.page_background};
`

export const NoData = styled.p`
	width: 100%;

	color: ${props => props.theme.colors.gray_400};
	text-align: center;
	font-size: 32px;
	font-weight: 600;
`

export const SearchContent = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	${mq({
		maxWidth: [
			'420px',
			'768px',
			'1046px',
			'1046px'
		],
		margin: [
			'24px 0px 0px 0px',
			'24px 0px 0px 0px',
			'0px 3rem 0px 3rem',
			'0px 3rem 0px 3rem'
		],
		position: [
			'static',
			'static',
			'relative',
			'relative'
		],
		top: [
			'0',
			'0',
			'-69px',
			'-92px'
		]
	})}
`

export const StyledTextInput = styled(TextField)({
	width: '100%',

	backgroundColor: '#FFFFFF',
	border: 'none',
	borderRadius: 6
})
