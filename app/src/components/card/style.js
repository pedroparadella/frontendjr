import styled from "styled-components";
import trashIcon from '../../icons/Icon-trash.svg';
import editIcon from '../../icons/Icon-edit.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    min-width: 14vw;
    min-height: 24vh;
    border-radius: 8px;
    padding-top: 24px;
    background-color: ${props => props.theme.branco};
    margin: 12px;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonte};
`

export const CardImageBox = styled.div`
    border-radius: 50%;
    background: #F6F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #E4E4E4;
`


export const CardImage = styled.img`
`

export const CardData = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px;
    border-top: 1px solid #E4E4E4;
    width: 80%;
`

export const Name = styled.p`
    color: ${props => props.theme.color};
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: inset 0px 3px 6px #0000000F;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;

`


export const DeleteIcon = styled.img`
    content: url(${trashIcon});
    width: 16px;
    height: 16px;
    margin-right: 6px;
`

export const EditIcon = styled.img`
    content: url(${editIcon});
    width: 16px;
    height: 16px;
    margin-right: 6px;
`

export const DeleteButton = styled.button`
    border: none;
    background: none;
    color: #263238;
    font-size: 16px;
    font-family: ${props => props.theme.fonte};
    width: 45%;
    &:hover{
        cursor: pointer;
        color: ${props => props.theme.erro};
        span {
            opacity: 1;
        }
    }
    span {
        opacity: 0.52;
    }

`

export const EditButton = styled.button`
    color: #263238;
    font-family: ${props => props.theme.fonte};
    border: none;
    background: none;
    color: #263238;
    font-size: 16px;
    width: 45%;
    font-family: ${props => props.theme.fonte};
    &:hover{
        cursor: pointer;
        color: ${props => props.theme.destaque};
        span {
            opacity: 1;
        }
    }
    span {
        opacity: 0.52;
    }
`

export const ButtonSeparationVerticalLine = styled.span`
    border: 1px solid #F6F4F6;
    height: 18px;
    width: 0px;
`