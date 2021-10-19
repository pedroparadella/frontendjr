import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  overflow: hidden;
  min-height: 100%;
  background-color: rgba(163, 163, 163, 0.568);
  position: absolute;
  z-index: 99;
  text-align: center;
`

export const Card = styled.div`
  padding-top: 1.875rem;
  width: 25rem;
  height: 18.75rem;
  background-color: #fefefe;
  position: fixed;
  top: 25%;
  left: 35%;
  text-align: center;
  border-radius: 0.5rem;
  font-family: muli, sans-serif;
  color: #263238;
`

export const H3 = styled.h3`
  font-size: 2.1875rem;
  margin: 1.25rem 0 0.625rem;
`

export const P = styled.p`
  font-size: 1.25rem;
  margin: 0 auto;
  width: 70%;
`

export const Button = styled.button`
  margin-top: 1.25rem;
  width: 6.25rem;
  height: 2.8125rem;
  font-size: 1rem;
  font-family: muli, sans-serif;
  color: #263238;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 0 0.0625rem 0.0625rem #e5e5e5;
  cursor: pointer;

  &:hover{
    background-color: #ebebeb;
  }
`
