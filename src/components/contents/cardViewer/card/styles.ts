import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  height: 267px;
  width: 234px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #e5e5e5;
`;

export const CardContent = styled.div`
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 70%;
    border-radius: 8px 8px 0 0;
    margin-bottom: 10px;
    object-fit: inherit;
  }

  hr {
    border-color: var(--background-main-color);
    opacity: 18%;
  }

  span {
    font-size: 16px;
  }
`;

export const CardFooter = styled.div`
  height: 43px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: inset 0px 3px 6px #0000000f;
`;
