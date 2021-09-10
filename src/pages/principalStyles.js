import styled from "styled-components";


const AppBody = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F2F2F2;

`
const AppContainer = styled.div`
margin: 30px 0px 50px 0px;
width: 90%;
height: auto;
`
const GridContainer = styled.div`
    width: 70%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const Button = styled.button`
    border-style: none;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    background: #30a7d7;
    color: #fff;
    font-size: 1em;
`

export {AppBody, AppContainer, GridContainer, Btn, Button};