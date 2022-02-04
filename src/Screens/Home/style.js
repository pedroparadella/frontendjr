import styled, { css } from "styled-components"
import { colors } from "../../Components/Colors/Style_global"
import Banner from "../../Assets/Img/fundo-busca.png"
import lupa from '../../Assets/Img/lupa/lupa.png'

export const Container = styled.div`
    display:flex;
    position: relative;
    justify-content:center;
    flex-wrap: wrap;
    background: #F6F4F6;
    @media(max-width: 1100px) {
        div{
           background-size: 1440px auto;
           background-position:50%;
        }
        input{
            width:80vw;
        }
        h1{
            margin-left:15px;
        }
       
      }
`
export const ContainerHeader = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index: 998;
    width: 100vw;
    height: 64px;
    margin:0;
    background: linear-gradient(20deg,#5F1478 0%,#AE276F 100%);
    background-repeat: no-repeat;  
`
export const Logo = styled.img`
    padding-left: 23.97px;
    padding-top: 13.97px;
`
export const ContainerSearch = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items: flex-end;
    width: 100vw;
    height:261px;
    margin:0;
    padding:0;
    background-image: url(${Banner});
    background-repeat: no-repeat; 
    background-size: 1440px auto;
`
export const Search = styled.form`
    padding-bottom:39px;
    @media(max-width: 1100px) {
        
`
export const InputSearch = styled.input`
    display:flex;
    width: 1000px;
    height: 75px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 8px;
    padding:0px 30px;
    font-size:20px;
    background-image: url(${lupa});
    background-position: 990px;
    
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:1046px;
    margin-top:32px;
    margin-bottom:px;
    @media(max-width: 1100px) {
        button{
            margin:15px;
        }
    }
`
export const Title = styled.h1`
    color: #5F1478;
    font-weight: 200;
    font-family: 'Muli', sans-serif;
`
export const Newcard = styled.button`
    ${({color}) => css`
    ${!!color && colors[color]}
    `};
    width: 173px;
    height:48px;
    border: none;
    display flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:18px;
    font-family: 'Muli', sans-serif;
    box-shadow: 0px 3px 6px #E5E5E5;
`

export const ContainerCardPoke = styled.div`
    justify-content:center;
    display:flex;
    flex-wrap: wrap;
    width:1146px;
`
export const CardPokemon = styled.div`
    justify-content:center;
    display:flex;
    flex-wrap: wrap;
    background-color: #fff;
    border:1px #E4E4E4;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #E5E5E5;
    text-align: center;
    width: 234px;
    height: 267px;
    margin: 18.5px;
    &:hover {
    box-shadow: 0px 0px 6px #56D4D6;  
    
    }
`
export const PokemonSprite = styled.img`
    margin:28px 28px 0px 28px;
    width: 90px;
    background:#F6F4F6;
    border-radius:60px;
    border: 1px solid #E4E4E4;
    padding:13px;
`
export const NamePokemon = styled.h2`
    font-weight: lighter;
    border-text: 1px solid #000;
    text-transform: capitalize;
    font-family: 'Open Sans', sans-serif;
    border-top:1px solid rgba(240, 239, 240, 1);
    border-size:40px;
    color: #5F1478;
`
export const ContainerButton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    align-self:flex-end;
    height: 37px;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    box-shadow: inset 0px 3px 6px #0000000F;  
`
export const ButtonCard = styled.button`
    display:flex;
    background: none;
    opacity:0.5;
    font-size:15px;
    border: 0;
    align-items:center;
    margin-right: 18px;
    cursor: pointer;
    &:hover{
        ${({color}) => css`
        ${!!color && colors[color]}
    `}
    }
`
export const Icons = styled.div`
    ${({color}) => css`
    ${!!color && colors[color]}
    margin-left:18px;
    margin-top:4px;
    `}
`

