import styled from 'styled-components';

export const Container = styled.div`
  font-size: 32px;
  color: #5f1478;
  max-width: 100%;
  margin-bottom: 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  @media (max-width: 1050px) {
    margin-right: 18px;
    margin-left: 18px;
  }

  @media (max-width: 540px) {
    font-size: 28px;
  }

  @media (max-width: 504px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    height: 100px;
    font-size: 26px;
  }
`;
