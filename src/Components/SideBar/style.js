import styled,{css} from "styled-components"
import { colors } from "../Colors/Style_global"

export const ContainerSidebar = styled.div`
    position:fixed;
    display:flex;
    justify-content: flex-end;
    z-index: 999;
    width:100%;
    height:100%;
    right: -200%;
    background: #F6F4F6CC;
    transition: all .3s;
    opacity:1;
    &.active{
        display:flex;
        z-index: 999;
        transition: all .3s;
        opacity:1;
        right:0;
    }
    @media(max-width: 690px) {
        div{
           width:90%;
        }
      
        label{
            width:90%;
        }
        input {
         width: 90%; 
        }
      }
`
export const AreaClose = styled.div`
      position:absolute;
      height:100%;
      width:48%;
      top:0;
      left:0;
`
export const SidebarCard = styled.div`
    padding: 32px;
    width:642px;
    height:100%;
    background:#fff;
` 
export const FormCard = styled.form`
    display:flex;
    flex-direction: column;
    margin:30.71px 0px;
    padding: 43.29px 25px 0px 0px;
    border-top: 1px solid #D4D4D4;
    border-bottom: 1px solid #D4D4D4;
    
`
export const LabelCard = styled.label`
    margin-bottom: 11.79px;
    font-family: 'muli', sans-serif;
    font-weight:bold;
    font-size:14px;
    color:#454545;
`
export const InputCard = styled.input`
    width: 590px;
    height: 60px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    margin-bottom: 51.22px;
    padding:0px 25px;
    font-size:18px;
    &.input[type='file']{
        width: 90px;
        height: 60px;
    }
`
export const UploadImg = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width: 590px;
    height: 60px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    margin-bottom: 51.22px;
    padding:0px 25px;
    font-size:18px;
`
export const LabelUpload = styled.label`
    width: 100vw;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: #757575;
    font-weight:lighter;
    font-size:18px;
    font-family: 'Muli', sans-serif;
`
export const SpanUpload = styled.span`
    ${({color}) => css`
    ${!!color && colors[color]}
    `};
    width: 224px;
    height:48px;
    display flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0px 3px 6px #E5E5E5;
`
export const InputUpload = styled.input`
    display:none;
`
export const TituloCard = styled.h1`
    font-family: 'Muli', sans-serif;
    font-weight:bold;
    font-size:32px;
    color:#5F1478;
`
export const ButtonSubmit = styled.div`
    display:flex;
    justify-content:flex-end;
`
export const ButtonCreate = styled.button`
    ${({color}) => css`
    ${!!color && colors[color]}
    `};
    width: 167px;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:8px;
    font-weight:bold;
    font-size:18px;
    font-family: 'Muli', sans-serif;
    box-shadow: 0px 3px 6px #E5E5E5;
`
