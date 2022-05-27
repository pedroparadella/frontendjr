import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #f6f4f6;

  animation: slideY 0.3s;
  @keyframes slideY {
    from {
      transform: translatex(100%);
    }
    to {
      transform: (0);
    }
  }
`

export const SubContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  width: 40%;
  height: 100%;
  background-color: #fff;


  div {
    max-width: 95%;
    margin: 0 auto;
  }

  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`

export const Header = styled.div`
  display: flex;

  p {
    font: normal bold 32px/40px Muli;
    color: #5f1478;
    padding-left: 20px;

  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  div {
    position: relative;
    width: 100%;
    margin-left: 0;
  }
  
  input {
    width: 100%;
    height: 50%;
    font-size: 23px;
    border: 1px solid #b9b9b9;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;

    @media(max-width: 720px) {
      font-size: 12px;
      width: 95%;
    }
  }

  input::-webkit-file-upload-button {
    display: none;
    user-select: none;
  }
  p {
    font: normal normal bold 14px/18px Muli;
    padding-bottom: 15px;
    text-transform: uppercase;
    
    @media (max-width: 550px) {
      font-size: 12px;
      text-align: center;
    }

  }
  button {
    position: absolute;
    border-radius: 8px;
    font: normal normal bold 18px/23px Muli;

    @media (max-width: 1600px) {
      padding: 8px 20px;
      bottom: 10px;
      right: -32px;
    }
    @media (max-width: 1000px) {
      padding: 8px 20px;
      bottom: 10px;
    }
    @media (max-width: 720px) {
      width: 110px;
      height: 30px;
      padding: 0px;
      margin-right: 15px;
      font-size: 12px;
    }
    
  }
`

export const CreateCard = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 4px 15px 0;
`
