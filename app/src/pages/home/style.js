import styled from "styled-components";
import fundo_busca from '../../images/fundo-busca.png';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-width: 100vw;
    overflow-x: hidden;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 6vh;
    padding: 0px 24px;
    box-sizing: border-box;
    background: rgb(174,39,111);
    background: linear-gradient(90deg, rgba(174,39,111,1) 0%, rgba(95,20,120,1) 100%);
`

export const Logo = styled.img``

export const SearchBarBg = styled.div`
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 24px 0;
    justify-content: center;
    background-image: url(${fundo_busca});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 24vh;
    div {
        position: relative;
    }
`

export const SearchBarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.branco};
    border-radius: 8px;
    padding: 4px 18px;
    margin-bottom: 12px;
`

export const SearchBar = styled.input`
    font-family: ${props => props.theme.fonte};
    outline: none;
    border: none;
    font-size: 22px;
    width: 74vw;
    height: 6vh;
    margin: 0;
    box-sizing: border-box;
    color: ${props => props.theme.texto};
`

export const SearchIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const ContentSection = styled.section`
    width: 64vw;
    align-self: center;
    display: flex;
    flex-direction: column;
`

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.p`
    color: ${props => props.theme.primaria};
    font-size: 32px;
    font-family: ${props => props.theme.fonte};
`

export const NewCardButton = styled.button`
    background: ${props => props.theme.destaque};
    color: ${props => props.theme.branco};
    border: none;
    padding:  16px 32px;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #92207242;
    font-family: ${props => props.theme.fonte};
    font-weight: bolder;
    &:hover {
        cursor: pointer;
    }
`

export const CardList = styled.section`
    display: flex;
    flex-flow: row wrap;
    overflow-y: auto;
`

export const LoadingContent = styled.section`
    display: flex;
    width: 100%;
    height: 26vh;
    align-items: center;
    justify-content: center;
`

export const ErrorMessage = styled.p`
    color: ${props => props.theme.erro};
    font-size: 24px;
`

export const Footer = styled.div`
    width: fit;
    padding: 0;
    margin: 24px 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

`

export const NextPageButton = styled.button`
    border: 1px solid #dedede;
    padding: 12px;
    border-radius: 8px;
    color: ${props => props.theme.color};
    opacity: 0.52;
    margin: 0 12px;
    &:hover {
        cursor: pointer;
        background: ${props => props.theme.destaque};
        border: 1px solid ${props => props.theme.destaque};
        opacity: 1;
        color: ${props => props.theme.branco};
    }
`

export const PreviousPageButton = styled.button`
    border: 1px solid #dedede;
    padding: 12px;
    border-radius: 8px;
    color: ${props => props.theme.color};
    margin: 0 12px; 
    opacity: 0.52;
    &:hover {
        cursor: pointer;
        background: ${props => props.disabled && props.theme.destaque};
        border: 1px solid ${props => props.disabled && props.theme.destaque};
        opacity: 1;
        color: ${props => props.theme.branco};
    }
`