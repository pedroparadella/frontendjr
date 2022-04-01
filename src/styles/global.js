import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {

/* Colors: */
--unnamed-color-000000: #000000;
--unnamed-color-a02724: #A02724;
--unnamed-color-b55b52: #B55B52;
--unnamed-color-263238: #263238;
--unnamed-color-c64049: #C64049;
--unnamed-color-e6e6e6: #E6E6E6;
--unnamed-color-e0e0e0: #E0E0E0;
--unnamed-color-f5f5f5: #F5F5F5;
--unnamed-color-f0f0f0: #F0F0F0;
--unnamed-color-ebebeb: #EBEBEB;
--unnamed-color-6c63ff: #6C63FF;
---cor-stroke: #EDD8F3;
---cor-bg: #F9F0FC;
---cor-branco: #FFFFFF;
---cor-aviso: #FFC400;
---cor-erro: #DB2525;
---cor-sucesso: #51C421;
---cor-texto: #454545;
---cor-destaque: #E76316;
---cor-primaria: #5F1478;
---cor-secundaria: #AE276F;

/* Font/text values */
--unnamed-font-family-muli: Muli;
--unnamed-font-style-normal: normal;
--unnamed-font-weight-normal: normal;
--unnamed-font-weight-bold: bold;
--unnamed-font-size-12: 12px;
--unnamed-font-size-13: 13px;
--unnamed-font-size-18: 18px;
--unnamed-font-size-21: 21px;
--unnamed-font-size-24: 24px;
--unnamed-font-size-32: 32px;
--unnamed-font-size-52: 52px;
--unnamed-character-spacing-0: 0px;
--unnamed-line-spacing-15: 15px;
--unnamed-line-spacing-16: 16px;
--unnamed-line-spacing-18: 18px;
--unnamed-line-spacing-20: 20px;
--unnamed-line-spacing-24: 24px;
--unnamed-line-spacing-26: 26px;
--unnamed-line-spacing-30: 30px;
--unnamed-line-spacing-40: 40px;
--unnamed-line-spacing-65: 65px;
--unnamed-text-transform-uppercase: uppercase;
--unnamed-decoration-underline: underline;
}

/* Character Styles */
.unnamed-character-style-1 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-21);
line-height: var(--unnamed-line-spacing-26);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
.-titulo-hero {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-52);
line-height: var(--unnamed-line-spacing-65);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
.-titulo-h1 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-32);
line-height: var(--unnamed-line-spacing-40);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
.-titulo-h2 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-24);
line-height: var(--unnamed-line-spacing-30);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
.-titulo-h3 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-18);
line-height: var(--unnamed-line-spacing-24);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
.-label-principal {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-20);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-texto);
}
.-txt-table-header {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-12);
line-height: var(--unnamed-line-spacing-15);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-texto);
text-transform: var(--unnamed-text-transform-uppercase);
}
.-link-secundario {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-16);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-secundaria);
text-decoration: var(--unnamed-decoration-underline);
}
.-link-destaque {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-16);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-destaque);
text-decoration: var(--unnamed-decoration-underline);
}
.-bt-label-branco {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-18);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-branco);
}
.-bt-label {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-18);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-primaria);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Muli", sans-serif;
}

`