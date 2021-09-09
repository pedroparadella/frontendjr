import styled from 'styled-components';

export const ModalBox = styled.div`
  position: relative;
  width: 438px;
  min-height: 434px;
  background: white;
  z-index: 2001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 700;
  text-align: center;
  color: #db2525;
  font-size: 1.7rem;
  margin-bottom: 30px;
`;

export const ModalText = styled.h2`
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 700;
  margin-top: 35px;
`;

export const Button = styled.button`
  background: #db2525;
  padding: 10px 30px;
  margin-top: 28px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;
