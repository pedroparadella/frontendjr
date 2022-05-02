import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  color: #263238;
  font-weight: bold;
  position: relative;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  padding: 15px;
  width: 100%;
  max-width: 400px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 30px;
  }

  button {
    position: absolute;
  }
`;
