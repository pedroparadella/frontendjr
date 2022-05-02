import styled from 'styled-components';

import { ButtonStyled } from '../../types/character';

export const Button = styled('button')<ButtonStyled>`
  border: ${(props) => (props.secondary ? `1px solid ${props.color}` : 'none')};
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;

  background-color: ${(props) =>
    props.secondary ? '#FFFFFF' : `${props.color}`};
  color: ${(props) => (props.secondary ? `${props.color}` : '#FFFFFF')};
  height: ${(props) => (props.height ? `${props.height}px` : '48px')};
  width: ${(props) => (props.width ? `${props.width}px` : '165px')};
  box-shadow: 0px 3px 6px
    ${(props) => (props.secondary ? '#E763162E' : '#92207242')};
`;

export const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #e76316;
  height: 25px;
  width: 25px;
  color: #ffffff;
  font-weight: bold;

  position: relative;
  top: -12.5px;
  left: calc(100% - 12.5px);

  @media (max-width: 470px) {
    top: 10px;
    left: calc(100% - 35px);
  }
`;

export const EditAndDeleteButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  height: 19px;
  padding: 0;

  p {
    color: #263238;
    font-size: 15px;
    opacity: 48%;
    margin-left: 5px;
  }
`;
