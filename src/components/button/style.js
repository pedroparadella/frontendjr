import styled from 'styled-components';

export const ButtonBox = styled.button`
  width: 173px;
  height: 48px;
  background: ${({ buttonBackground }) => buttonBackground};
  box-shadow: 0 3px 6px #92207242;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ buttonColor }) => buttonColor};
  font-weight: bold;
  border: ${({ buttonBorder }) => buttonBorder};
  cursor: pointer;
  transition: 0.5s all;
  margin: ${({ buttonMarginDesk }) => buttonMarginDesk};

  @media (max-width: 425px){
    margin: ${({ buttonMarginMobile }) => buttonMarginMobile}
  }

  :hover{
    filter: brightness(90%);
  }
`;