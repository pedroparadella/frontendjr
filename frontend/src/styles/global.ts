// External libraries
import {
	createGlobalStyle
} from 'styled-components'
import mq from './breakpoint'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* ::-webkit-scrollbar-track {
      border-radius: 6px;
    } */
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  body {
    background: ${props => props.theme.colors.page_background};

    font: 400 16px 'muli', sans-serif;

    p {
      font-size: 1rem;
      font-family: muli;
      color: ${props => props.theme.colors.normal_text};

      span {
        color: ${props => props.theme.colors.card_text};
      }
    }

    h1 {
      font-size: 32px;
      font-weight: 500;
      font-family: muli;
      color: ${props => props.theme.colors.purple};
    }
    h2 {
      font-size: 32px;
      font-weight: 500;
      font-family: muli;
      color: ${props => props.theme.colors.red_500};
    }
    h3 {
      font-size: 32px;
      font-weight: 400;
      font-family: muli;
      color: ${props => props.theme.colors.purple};;
    }
    h4 {
      font-size: 32px;
      font-weight: 500;
      font-family: muli;
      color: ${props => props.theme.colors.orange_500};;
    }
  }

  .react-modal-overlay {
    background-color: ${props => props.theme.colors.modal_background};
    /* backdrop-filter: blur(2.5px); */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 642px;
    background: ${props => props.theme.colors.card_background};
    padding: 35px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 768px) {
      width: calc(100% - 2.5rem);
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .react-modal-content-delete {
    width: 100%;
    max-width: 438px;
    background: ${props => props.theme.colors.card_background};
    padding: 50px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: calc(100% - 2.5rem);
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .react-modal-close {
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 0;
    border-radius: 17px;
    background: ${props => props.theme.colors.orange_500};
    box-shadow: 0px 3px 6px ${props => props.theme.colors.orange_050};

    position: absolute;
    right: -17px;
    top: -17px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    ${mq({
		cursor: [
			'none',
			'none',
			'pointer',
			'pointer'
		]
	})}
  }
`
