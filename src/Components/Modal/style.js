import styled, {css} from "styled-components"
import { colors } from "../Colors/Style_global"

export const ContainerModal = styled.div`
    position:fixed;
    display:none;
    justify-content: center;
    z-index:999;
    width: 100vw;
    height: 100vh;
    background: #F6F4F6CC;
    &.active{
        display:flex;
    }
`
export const Modal = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width: 438px;
    height: 434px;
    margin:144px;
    background: #fff;
`
export const Sprite = styled.img`
    width:200px;
    margin:0px 100px;
    padding:5px;
    border-radius: 360px;
`
export const Name = styled.h1`
color: #5F1478;
font-weight: 200;
font-family: 'Open Sans', sans-serif;
text-transform: capitalize;
`
export const InfoPokemon = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    border-bottom: 1px solid #D4D4D4;
`
export const ContainerButton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    align-self:flex-end;
    height: 60px;
    width: 100%;
    margin:33px;
   
`
export const ButtonModal = styled.button`
    ${({color}) => css`
    ${!!color && colors[color]}
    `};
    width: 165px;
    height:48px;
    display flex;
    align-items:center;
    justify-content:center;
    margin:8.5px;
    font-weight:bold;
    font-size: 18px;
    font-family: 'Muli', sans-serif;
    box-shadow: 0px 3px 6px #92207242;
`

