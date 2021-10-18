import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  min-height: 100%;
  background-color: rgba(163, 163, 163, 0.568);
  position: absolute;
  z-index: 99;
  text-align: center;
`

export const Card = styled.div`
  padding-top: 30px;
  width: 400px;
  height: 300px;
  overflow: hidden;
  background-color: #fefefe;
  position: fixed;
  top: 12%;
  left: 35%;
  text-align: center;
  border-radius: 8px;
  font-family: muli, sans-serif;
  color: #263238;
`

export const H3 = styled.h3`
  font-size: 35px;
  margin: 20px 0 10px;
`

export const P = styled.p`
  font-size: 20px;
  margin: 0 auto;
  width: 70%;
`

export const Button = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 45px;
  font-size: 16px;
  font-family: muli, sans-serif;
  color: #263238;
  font-weight: 700;
  border-radius: 8px;
  border: 0;
  box-shadow: 0px 1px 1px #e5e5e5;
  cursor: pointer;

  &:hover{
    background-color: #ebebeb;
  }
`
