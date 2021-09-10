import styled from "styled-components";

const Cards = styled.div`
background: white;
margin: 10px;
font-family: "Poppins";
border-radius: 10px;
box-shadow: 5px 5px 10px #0076a3;
-webkit-box-shadow: 5px 5px 10px #0076a3;
-moz-box-shadow: 5px 5px 10px #0076a3;

&:hover {
    -webkit-box-shadow: 5px 5px 10px #00FFF3;
-moz-box-shadow: 5px 5px 10px #00FFF3;
}
`
const CardImg = styled.div`
 text-align: center;
`

const CardTypes = styled.div`
display: flex;
justify-content: center;  
`

const CardType = styled.div`
padding: 5px 10px;
    margin: 10px 10px 10px 0;
    border-radius: 5px;
    background: cyan;
    color: #fff;

`

const CardName = styled.div`
text-align: center;
text-transform: capitalize;
font-weight: 800;
`

const CardInfo = styled.div`
 margin-left: 10px;
`

const CardData = styled.div`
 margin-left: 10px;
`
const Title = styled.p`
font-weight: 700;
`

export {Cards, CardImg, CardTypes, CardType, CardName, CardInfo, CardData, Title };