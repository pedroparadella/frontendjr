import styled from 'styled-components'

interface ButtonTypes {
  variant?: 'primary' | 'secondary'
}

export const Container = styled.button<ButtonTypes>`

  padding: 0 40px;
  height: 48px;
  text-align: center;
  font-size: 23px;

  background: ${({variant}) => variant == 'secondary' ? '#fff' : '#e76316' } 0% 0% no-repeat padding-box;
  color: ${({variant}) => variant == 'secondary' ? '#e76316' : '#fff' };

  font: normal normal 300 18px/23px Muli;

  border-radius: 8px;
  border: 1px solid #E76316;
  box-shadow: 0px 3px 6px #92207242;
  cursor: pointer;

  @media (max-width: 820px) {
    justify-content: center;
    p {
        padding: 15px;
      }
  }
`
