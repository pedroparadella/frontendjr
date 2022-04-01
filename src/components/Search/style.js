import styled from  "styled-components";
import fundo from '../../assets/fundo-busca.png'
import lupa from '../../assets/lupa.png'
export const Container = styled.section`
    position: relative;
    top: 0px;
    left: 0px;
    max-width: 1440px;
    max-height: 261px;
    margin: 0 auto;
    section {
        width: 100%;
    }
    .fundo{
        background: transparent url(${fundo}) 0% 0% no-repeat padding-box;
        height: 261px;
        width: 1440px;
        position: relative;
    }
    .imageContainer input{
        bottom: 39px;
        left: 168px;
        width: 1046px;
        height: 75px;
        position: absolute;
        margin: 0 auto;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        border: none;
        padding: 23px 767px 22px 28px;
        font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
    }
    
    .imageContainer input::placeholder {
        
        font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        letter-spacing: 0px;
        color: #757575;
        opacity: 1;
    }
    .imageContainer button {
        background: transparent url(${lupa}) 0% 0% no-repeat padding-box;
        position: absolute;
        top: 160px;
        left: 1140px;
        width: 49px;
        height: 49px;
        border: none;
        cursor: pointer;
        opacity: 1;
    }
    .teste {
        background: #F6F4F6 0% 0% no-repeat padding-box;
        opacity: 1;
        width: 1440px;
        height: 1746px;
    
    }
    section {
        position: relative;
        top: 116px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #e5e5e5;
        border: 1px solid #E4E4E4;
        border-radius: 8px;
        opacity: 1;
        width: 234px;
        height: 267px;
    }
    .description h1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-20) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-263238);
        text-align: center;
        opacity: 1;   
        top: 155px;
        left: 21px;
        width: 191px;
        height: 40px;
        position: relative;
    }
    .image {
        position: relative;
        left: 69px;
        width: 95px;
        height: 95px;
        background: #F6F4F6 0% 0% no-repeat padding-box;
        border: 1px solid #E4E4E4;
        opacity: 1;
        border-radius: 50%;
    }
    .image img {
        position: absolute;
        top: 18px;
        left: 15px;
        width: 64px;
        height: 63px;
        opacity: 1;
    }
    .mudancas {
        top: 224px;
        width: 234px;
        height: 43px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 3px 6px #0000000f;
        border-radius: 0px 0px 8px 8px;
        opacity: 1;
        position: absolute;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 39px;
    }
    .mudancas .exclude {
        position: relative;
        top: 13px;
        left: 27px;
        width: 46px;
        height: 19px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/19px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-263238);
        text-align: center;
        border: none;
        display: flex;
        gap: 11px;
    }
    .mudancas .exclude button {
        opacity: 0.52;
    }
    .mudancas .edit {
        position: relative;
        top: 13px;
        width: 42px;
        height: 19px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/19px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-263238);
        text-align: center;
        display: flex;
        border: none;
        gap: 9px;
    }
    .mudancas .edit button {
        opacity: 0.48;

    }
     `
     
export const Text = styled.div`
    position: absolute;
    top: 301px;
    left: 168px;
    display: flex;
    justify-content: space-between;

h1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-primaria);
    text-align: left;
    opacity: 1;
    margin: auto;
    display: block
    max-width: 291px;
    width: 100%;
    height: 40px;

}
`;
export const ButtonCard = styled.div`
position: absolute;
    top: 293px;
    left: 1041px;
    width: 173px;
    height: 48px;
    .newCard {
    display: flex;
    border: none;
    text-decoration: none;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    opacity: 1;
    background: var(---cor-destaque) 0% 0% no-repeat padding-box;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-branco);
    text-align: left;
    font: normal normal bold 18px/23px Muli;
    letter-spacing: 0px;
    color: #FFFFFF;
    align-items: center;
    padding-left: 40px;
    top: 293px;
    left: 1041px;
    width: 173px;
    height: 48px;
    }
`;
export const WrapperContainer = styled.div`
    display: grid;
    position: relative;
    left: 168px;
    grid-template-columns: repeat(4, 1fr);
    gap: 37px;
    width: 234px;
    height: 267px;
`
/*
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  }
`;
export const Text = styled.div`
    position: absolute;
    top: 301px;
    left: 168px;
    
    display: inline;
    h1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-primaria);
        text-align: left;
        opacity: 1;
        margin: auto;
        display: block
        max-width: 291px;
        width: 100%;
        height: 40px;

    }
`;
export const ButtonCard = styled.div`
    position: absolute;
        top: 293px;
        left: 1041px;
        width: 173px;
        height: 48px;
        .newCard {
        display: flex;
        border: none;
        text-decoration: none;
        box-shadow: 0px 3px 6px #92207242;
        border-radius: 8px;
        opacity: 1;
        background: var(---cor-destaque) 0% 0% no-repeat padding-box;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-branco);
        text-align: left;
        font: normal normal bold 18px/23px Muli;
        letter-spacing: 0px;
        color: #FFFFFF;
        align-items: center;
        padding-left: 40px;
        top: 293px;
        left: 1041px;
        width: 173px;
        height: 48px;
        }
`;
export const WrapperContainer = styled.div`
        display: flex;
        position: absolute;
        top: 377px;
        left: 168px;
        width: 234px;
        height: 267px;
        margin: 0 auto;
`


export const Container = styled.section`
    position: relative;
    top: 0px;
    left: 0px;
    max-width: 1440px;
    max-height: 261px;
    margin: 0 auto;
    section {
        width: 100%;
    }
    .fundo{
        background: transparent url(${fundo}) 0% 0% no-repeat padding-box;
        height: 261px;
        width: 1440px;
        position: relative;
    }
    .searchInputs input{
        bottom: 39px;
        left: 168px;
        width: 1046px;
        height: 75px;
        position: absolute;
        margin: 0 auto;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        border: none;
        padding: 23px 767px 22px 28px;
        font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
    }
    
    .searchInputs input::placeholder {
        
        font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        letter-spacing: 0px;
        color: #757575;
        opacity: 1;
    }
    .searchInputs .button {
        background: transparent url(${lupa}) 0% 0% no-repeat padding-box;
        position: absolute;
        top: 160px;
        left: 1140px;
        width: 49px;
        height: 49px;
        border: none;
        cursor: pointer;
        opacity: 1;
    }
`*/