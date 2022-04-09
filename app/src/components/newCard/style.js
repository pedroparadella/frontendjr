import styled, { keyframes } from "styled-components";
import createIcon from '../../icons/icone_criar.svg';

const moveAnimation = keyframes`
    0% {
        transform: translate(100vw,0);
    } 
    50% {
        transform: translate(50vw, 0);
    }
    100% {
        transform: translate(0);
    }
`

export const Wrapper = styled.div`
    right: 0;
    top: 0;
    position: fixed;
    display: flex;
    flex-flow: row-reverse nowrap;
    animation: ${moveAnimation};
    animation-duration: 0.1s;
    animation-timing-function: ease-in-out;
`

export const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
`

export const SideMenu = styled.aside`
    background: ${props => props.theme.branco};
    width: 32vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 24px;
    position: absolute;
`

export const NotImplement = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Header = styled.header`
    display: flex;
    align-items: center;
`

export const NewItemIcon = styled.img`
    content: url(${createIcon});
`

export const Title = styled.span`
    margin-left: 24px;
    font-size: 32px;
    color: ${props => props.theme.primaria};
    font-family: ${props => props.theme.fonte};
`

export const Divide = styled.div`
    border: 1px solid #D4D4D4;
    margin: 32px 0;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px 0;
`

export const Label = styled.label`
    color: ${props => props.theme.color};
    font-family: ${props => props.theme.fonte};
    margin-bottom: 8px;
`

export const Input = styled.input`
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    height: 48px;
    box-sizing: border-box;
    padding-left: 8px;
    font-size: 16px;
    outline: none;
    font-family: ${props => props.theme.fonte};
    &:focus {
        border: 1px solid ${props => props.theme.destaque};
    }
`

export const UploadInputBox = styled.div`
    border-radius: 8px;
    border: 1px solid #B9B9B9;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    p {
        margin-left: 12px;
        color: #757575;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const UploadButton = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 6px #92207242;
    border: 1px solid ${props => props.theme.destaque};
    background: ${props => props.theme.branco};
    color: ${props => props.theme.destaque};
    width: 40%;
    height: 80%;
    margin-right: 4px;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        border: 1px solid ${props => props.theme.destaque};
        background: ${props => props.theme.destaque};
        color: ${props => props.theme.branco};
    }
`

export const UploadInput = styled.input`
    display: none;
`

export const NewCardButton = styled.button`
    box-shadow: 0px 3px 6px #92207242;
    background: ${props => props.theme.destaque};
    color: ${props => props.theme.branco};
    font-weight: bold;
    outline: none;
    border: none;
    width: 9vw;
    height: 5vh;
    align-self: flex-end;
    border-radius: 8px;
    margin-right: 12px;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`