import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 1046px;
  height: 75px;
  margin-top: 83px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;
    border-radius: 8px;
    height: 100%;
    padding-right: 25px;
  }

  @media (max-width: 1050px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  border: none;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  font-size: 20px;
  outline: 0;
`;
