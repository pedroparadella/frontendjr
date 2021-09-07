import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 267px;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
`;

export const CardText = styled.p`
  color: #5f1478;
`;

export const Options = styled.div`
  border-top: 1px solid white;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  display: flex;
  justify-content: space-around;
`;
