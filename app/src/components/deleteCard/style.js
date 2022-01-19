import styled, { keyframes } from "styled-components";
import trashIcon from '../../icons/Icon-trash.svg';
import closeIcon from '../../icons/close.svg';

const fadeInAnimation = keyframes`
    0% {
        opacity: 0.1;
    } 
    100% {
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    animation: ${fadeInAnimation};
    animation-duration: 0.19s;
    animation-timing-function: ease-in-out;
`
export const Bg = styled.div`
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100%;
    position: relative;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.branco};
    padding: 24px;
    border-radius: 8px;
    z-index: 2;
    position: fixed;
`
export const CardImgBox = styled.div`
    border-radius: 50%;
    border: 6px solid #E4E4E4;
    background: #DB25250F 0% 0% no-repeat padding-box;
    width: 156px;
    height: 156px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardImg = styled.img`
    content: url(${trashIcon});
    width: 124px;
    width: 64px;
`

export const CardTitle = styled.h1`
    color: ${props => props.theme.erro};
    font-family: ${props => props.theme.fonte};
`

export const CardMessage = styled.p`
    margin: 0;
    color: ${props => props.theme.color};
`

export const ButtonsContainer = styled.div`
    margin-top: 24px;
    padding: 24px;
    border-top: 1px solid #E4E4E4;
`

export const DeleteButton = styled.button`
    border: none;
    background-color: ${props => props.theme.erro};
    color: ${props => props.theme.branco};
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    width: 165px;
    height: 48px;
    margin-right: 18px;
    &:hover {
        cursor: pointer;
    }
`

export const CancelButton = styled.button`
    width: 165px;
    height: 48px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid ${props => props.theme.erro};
    background-color: ${props => props.theme.branco};
    color: ${props => props.theme.erro};
    border-radius: 8px;
    width: 164px;
    height: 48px;
    &:hover {
        cursor: pointer;
    }
`

export const CloseCard = styled.div`
    content: url(${closeIcon});
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 8px;
    position: absolute;
    right: -20px;
    top: -24px;
    background: #E76316 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E7631636;
    &:hover {
        cursor: pointer;
    }

`
export const CloseIcon = styled.div`
    content: url(${closeIcon});
`

