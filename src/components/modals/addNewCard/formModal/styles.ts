import styled from 'styled-components';

export const FormContainer = styled.form`
  height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  hr {
    width: 100%;
    border-color: #b9b9b9;
    opacity: 18%;
  }
`;

export const FormMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  label {
    font-size: 18px;
    font-weight: bold;
    color: #454545;
    margin-bottom: 12px;
  }

  @media (max-width: 512px) {
    span {
      font-size: 14px;
    }

    label {
      font-size: 14px;
    }

    button {
      font-size: 16px;
    }
  }
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  font-size: 18px;
  height: 60px;
  width: 100%;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: 25px;

  ::-webkit-input-placeholder {
    font-family: 'Muli';
    font-size: 18px;
    font-weight: 400;
    color: #757575;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
