import styled from "styled-components";
export const Open = styled.div `
        position: fixed;
    background: #F6F4F6CC 0% 0% no-repeat padding-box;
        opacity: 1;
        position: fixed;
        top: 0px;
        margin: 0 auto;
        right: 0;
        width: 1440px;
        height: 772px;
        left: 0;
        z-index: 1;
    .header {
        position: relative;
        top: -2px;
        left: 798px;
        width: 642px;
        height: 767px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    .header img {
        top: 41px;
        left: 32px;
        width: 46px;
        height: 46px;
        opacity: 1;
        position: absolute;
    }
    .header h1 {
        top: 45px;
        left: 96px;
        width: 152px;
        height: 40px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-primaria);
        text-align: left;
        opacity: 1;
        position: absolute;
    }
    .caminho {
        top: 118px;
        left: 32px;
        max-width: 572px;
        height: 0px;
        border: 1px solid #D4D4D4;
        opacity: 1;
        position: relative;
    }
    p {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 14px/var(--unnamed-line-spacing-18) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-texto);
        text-align: left;
        font: normal normal bold 14px/18px Muli;
        letter-spacing: 0px;
        color: #454545;
        text-transform: uppercase;
        opacity: 1;
    }
     p#insertText  {
        top: 161px;
        left: 35px;
        width: 220px;
        height: 18px;
        position: absolute;
    }
    p#insertImg {
        top: 301px;
        left: 35px;
        width: 341px;
        height: 18px;
        position: absolute;
    }
    .header .text {
        width: 573px;
        max-width: 100%;
        position: absolute;
        top: 191px;
        left: 35px;
        display: flex;
    }
    .header .text input{
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        opacity: 1;
        width: 573px;
        max-width: inherit;
        height: 60px;
        display: block;
        position: static;
        font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        padding: 25px;
    } 
    .file {
        top: 331px;
        left: 35px;
        width: 573px;
        height: 60px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        opacity: 1;
        position: relative;
    }
    .file label {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-destaque);
        text-align: left;
        position: absolute;
        top: 6px;
        left: 341px;
        height: 48px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        border: 1px solid var(---cor-destaque);
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #e763162e;
        border: 1px solid #E76316;
        border-radius: 8px;
        opacity: 1;
        padding: 12px 42px 13px 40px;
    }
    input[type='file'] {
        display: none
    }
    .footer {
        top: 443px;
        left: 32px;
        width: 572px;
        height: 0px;
        border: 1px solid #D4D4D4;
        opacity: 1;
        position: absolute;
    }
    button {
        top: 481px;
        left: 435px;
        width: 167px;
        height: 48px;
        background: var(---cor-destaque) 0% 0% no-repeat padding-box;
        background: #E76316 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #92207242;
        border-radius: 8px;
        opacity: 1;
        position: absolute;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-branco);
        text-align: left;
        opacity: 1;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
    }
 `
export const ButtonExclude = styled.div `
        background: #F6F4F6CC 0% 0% no-repeat padding-box;
        opacity: 1;
        position: fixed;
        top: 0px;
        margin: 0 auto;
        right: 0;
        width: 1440px;
        height: 772px;
        left: 0;
        z-index: 1;
    .main{
        top: 144px;
        left: 501px;
        width: 438px;
        height: 434px;
        background: var(---cor-branco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
        position: absolute;
    }
    .fechar {
        top: 127px;
        left: 922px;
        width: 34px;
        height: 34px;
        opacity: 1;
        position: absolute;
        z-index: 2;
        border-radius: 50%;
        background: var(---cor-destaque) 0% 0% no-repeat padding-box;
        background: #E76316 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #E7631636;
    }
    .fechar button {
        top: 7px;
        left: 7px;
        border: none;
        width: 21px;
        height: 21px;
        opacity: 1;
        position: absolute;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        color: var(---cor-branco);
        position: absolute;
        background: var(---cor-destaque) 0% 0% no-repeat padding-box;
        background: #E76316 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #E7631636;
        cursor: pointer;
    }
    .imagem {
        top: 50px;
        left: 139px;
        width: 159px;
        height: 159px;
        background: #DB25250F 0% 0% no-repeat padding-box;
        border: 6px solid #E4E4E4;
        opacity: 1;
        position: relative;
        border-radius: 50%;
    }
    .imagem img {
        top: 40px;
        left: 44px;
        width: 68px;
        height: 68px;
        opacity: 1;
        position: absolute;
    }
    .content h1 {
        top: 234px;
        left: 169px;
        width: 100px;
        height: 40px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-erro);
        text-align: center;
        opacity: 1;
        position: absolute;
    }
    .content p {
        top: 287px;
        left: 124px;
        width: 190px;
        height: 15px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-15) var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-texto);
        text-align: left;
        text-transform: uppercase;
        opacity: 1;
        position: absolute;
    }
    .content .traco {
        top: 330px;
        left: 36px;
        width: 364px;
        height: 0px;
        border: 1px solid #E4E4E4;
        opacity: 1;
        position: absolute;
    }
    .content .buttons {
        top: 341px;
        left: 49px;
        width: 382px;
        height: 73px;
        opacity: 1;
        position: absolute;
        display: flex;
        justify-content: space-between;
    }
    .content button {
        width: 165px;
        height: 48px;
    }
    .content button#buttonExcluir {
        background: red 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #92207242;
        border-radius: 8px;
        opacity: 1;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-branco);
        text-align: center;
        opacity: 1;
        top: 12px;
        left: 54px;
        border: none;
    }
    .content button#buttonCancelar {
        right: 49px;
        width: 158px;
        height: 48px;
        border: 1px solid var(---cor-erro);
        box-shadow: 0px 3px 6px #92207242;
        border: 1px solid #DB2525;
        border-radius: 8px;
        opacity: 1;
        position: absolute;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(---cor-erro);
        opacity: 1;
    }
`
