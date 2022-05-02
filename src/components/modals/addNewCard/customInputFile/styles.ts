import styled from 'styled-components';

export const Container = styled.div`
  color: #454545;
  font-weight: bold;
  font-size: 18px;
`;

export const FileInput = styled.div`
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  height: 60px;
  width: 100%;
  padding: 6px 8px 6px 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;

  input {
    display: none;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    color: #757575;
  }
`;
