import styled from 'styled-components';

export const ResultSection = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
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

export const Options = styled.div`
  border-top: 1px solid white;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  display: flex;
  justify-content: space-around;
`;

export const ContainerModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(187, 187, 187, 0.3);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
