import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
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
    --color-stroke: #EDD8F3;
    --color-bg: #F6F4F6;
    --color-white: #FFFFFF;
    --color-warning: #FFC400;
    --color-error: #DB2525;
    --color-success: #51C421;
    --color-text: #454545;
    --color-emphasis: #E76316;
    --color-primary: #5F1478;
    --color-secondary: #AE276F;
    --color-search:#757575;
    --color-search-hover:#263238;

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
    --unnamed-decoration-underline: underline

/* Character Styles */
.unnamed-character-style-1 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-21);
line-height: var(--unnamed-line-spacing-26);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-titulo-hero {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-52);
line-height: var(--unnamed-line-spacing-65);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-titulo-h1 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-32);
line-height: var(--unnamed-line-spacing-40);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-titulo-h2 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-24);
line-height: var(--unnamed-line-spacing-30);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-titulo-h3 {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-18);
line-height: var(--unnamed-line-spacing-24);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-label-principal {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-20);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
.-txt-table-header {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-12);
line-height: var(--unnamed-line-spacing-15);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-text);
text-transform: var(--unnamed-text-transform-uppercase);
}
.-link-secundario {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-16);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-secondary);
text-decoration: var(--unnamed-decoration-underline);
}
.-link-destaque {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-16);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-emphasis);
text-decoration: var(--unnamed-decoration-underline);
}
.-bt-label-branco {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-18);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-white);
}
.-bt-label {
font-family: var(--unnamed-font-family-muli);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-13);
line-height: var(--unnamed-line-spacing-18);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--color-primary);
}
    
}
*{
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
}
html{
	font-size: 62.5%;
}
body{
	height: 100vh;
    width:100%vw;
   background:var(--color-bg);
    -webkit-font-smoothing: antialiased;
}
button{
    cursor: pointer;
}
body, button, input, textarea{
	font-size: clamp(14px, 1.6rem, 2vw );
}
input{
    font-family:Mulish, sans-serif ;
    font-weight:400;
}
.sr-only{
	position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}


[disabled] {
    opacity: 0.6;
    cursor:not-allowed;
}

.react-modal-overlay{
    background:red;
   //position:fixed;
   top:0;
}


`

