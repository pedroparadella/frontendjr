import styled from "styled-components";

export const CardBox = styled.div`
  width: 234px;
  height: 267px;
  background: #FFF;
  border: 1px solid #E4E4E4;
  box-shadow: 0 3px 6px #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  span{
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
    background-color: #F6F4F6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const Title = styled.p`
  color: #263238;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid #F0EFF0;
  width: 80%;
  padding-top: 10px;
`;

export const OptionsBox = styled.div`
  width: 100%;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 3px 6px #0000000F;
  display: flex;

  button{
    width: 50%;
    background-color: transparent;
    padding: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s all;
    cursor: pointer;
    

    :hover{
      p{
        opacity: 9;
      }
    }

    :first-child{
      border-right: 1px solid #F6F4F6;
    }

    p{
      margin-left: 12px;
      color: #263238;
      opacity: 0.52;
    }
  }

`;

