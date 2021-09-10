import React from "react";
import {Cards, CardImg, CardTypes, CardType, CardName, CardInfo, CardData, Title } from './styled'
import typeColors from "./typeCollors";

function Card(props)  {
   
   console.log(props)
    return(

props.pokemons.map((pokemon, i)=> (
<Cards key = {i}>
       <CardImg>
        <img src={pokemon.sprites.front_default} alt=" " />
       </CardImg> 
   <CardName> {pokemon.name} </CardName>
   
   <CardTypes>
   {
    pokemon.types.map(type => {
    return (
            <CardType style={{ backgroundColor: typeColors[type.type.name] }}>
             {type.type.name}
             </CardType>
     )})
 }     
   </CardTypes>
   <CardInfo>
       <CardData>
           <Title>Weight</Title>
           <p>{pokemon.weight}</p>
       </CardData>
       <CardData>
           <Title>Height</Title>
           <p>{pokemon.height}</p>
       </CardData>
       <CardData>
           <Title>Ability</Title>
           <p>{pokemon.abilities[0].ability.name}</p>
       </CardData>

   </CardInfo>    
   </Cards> 
    ))
   )
   
}

export default Card;