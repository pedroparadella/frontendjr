import styled from 'styled-components'
import Image from '../../images/fundo-busca.png'

export const Content = styled.div`
 margin-top: 65px;
 width: 100%;
 height: auto;
 display: flex;
 flex-direction: column;
`

export const TopContent = styled.div`
 width: 100%;
 height: 180px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: url(${Image});
 background-size: cover;


.search {
    width: 100%;
    height: 60px;
    border: none;
    outline: 0;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    font-size: 20px;
   
}

img{
    position: relative;
    top: 2px; 
    right: 55px;
    cursor: pointer;
}
`

export const GeneralContent = styled.div`
 width: 70%;
 height: 100%;

 display: flex;
 justify-content: center;
 align-items: center;
`

export const ContentCards = styled.div`
height: auto;
display: flex;
align-items: center;
justify-content: center;
`

export const ContentGeralCard = styled.div`
 width: 70%;
 height: auto;
`

export const Cards = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-wrap: wrap;
justify-content: normal;
`

export const TopCards = styled.div`
/*margin-top: 20px; */ 
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex:2;

 h1{
      color: #5F1478;
      font-size: 32px;
      font-family: muli , 'sans-serif';
 }

 button {
    height: 40px;
    width: 180px;
    background: #e76316;
    border: #e76316;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-family: muli , 'sans-serif';
    transition: 0.3;
}

button:hover{
    filter: brightness(0.9);
}

@media screen and (max-width: 850px){
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

}

@media screen and (max-width: 642px){
h1{
    display: none;
}


}


`

export const CardsNew = styled.div`
    margin-top: 30px;
    width: 170px;
    height: 180px;
    border: 2px solid #E4E4E4;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    justify-content: space-around;
    margin-left: 10px;

   
`

export const ImageCard = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    justify-content: normal;
    align-items: center;
    margin: 0 auto;

    img{
      width: 100%;
      height: 100%;
    }
`
export const TextCard = styled.div`
display: flex;
justify-content: center;
align-items: center;

h3{
    text-align: center;
    font-size: 15px;
}
`

export const ButtonsCard = styled.div`
  display: flex;
  justify-content: space-around;

  .button-edit, .button-delete{
      border: none;
      background-color: white;
      cursor: pointer;
  }

`

