import styled from 'styled-components'

export const Box = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 0px 10vh;

  .container-box {
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #e5e5e5;
  }
`

export const Name = styled.p`
  max-width: 65%;
  margin: 0 auto;
  margin-bottom: auto;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #0000000f;
  font: normal normal normal 16px/20px Muli;
  color: #263238;
  text-transform: capitalize;
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50%;
  border: solid 3px #e4e4e4;
`

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  box-shadow: inset 0px 3px 6px #0000000f;
  font: normal normal normal 15px/19px Muli;
  width: 200px;
  gap: 20px;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .div-button {
    width: .5px; 
    border-right: 1px solid #e5e5e5; 
    height: 20px; 
    float: left;
  }

  div > button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 0px;
    margin-top: 5px;
    color: #263238;
    background-color: white;
  }

  div :hover {
    color: #e76316;
    transition: all 0.3s;
  }
  div:first-child :hover {
    color: #db2525;
    transition: all 0.3s;
  }
`
