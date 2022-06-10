import styled from "styled-components";

export const Modal = styled.div`
  width: 438px;
  height: 434px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #FFF;
  border-radius: 8px;

  @media (max-width: 500px){
    width: 100%;
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 159px;
    height: 159px;
    border-radius: 50%;
    border: 6px solid #E4E4E4;
    background-color: #DB25250F;

    img{
      width: 68px;
      height: 68px;
    }
  }
`;

export const ButtonClose = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  position: absolute;
  right: -.7rem;
  top: -.7rem;
  background-color: #E76316;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const Title = styled.h3`
  width: 85%; 
  text-align: center;
  font-size: 32px;
  color: #DB2525;
  margin: 25px 0 13px 0;
`;

export const Description = styled.p`
  width: 85%;
  text-align: center;
  font-size: 12px;
  color: #454545;
  text-transform: uppercase;
`;

export const BoxButtons = styled.div`
  margin-top: 50px;
  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;