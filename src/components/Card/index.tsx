import trash from '../../assets/img/Icon-trash.svg';
import edit from '../../assets/img/Icon-edit.svg';
import { Change } from '../Change';
import style from './Card.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Initial } from "../../interfaces/IInitial";
import { IPokemonInfo } from '../../interfaces/IPokemonInfo';
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';
import { useSearch } from '../../hooks/useSearch';

export function Card(pokemon: IPokemonInfo){

  const [initials, setInitials] = useState<Initial>();
  const {title, setTitle} = useSearch(); //CONTEXTO

  async function getInitialPokemons(){
    const {data} = await axios.get<Initial>('https://pokeapi.co/api/v2/pokemon/');
    setInitials(data);
  }
  
  useEffect(() => {
    getInitialPokemons();
    console.log('ENTROU USE EFFECT');
  },[]);
  
  // console.log(initials);

  console.log(pokemon)

  //Pega o número dos pokemons para encontrar a imagem
  let image = [''];
  let counter = 0;

  initials?.results.map((initial) => {
    if(counter<9){
      image[counter] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + initial.url.substring(34,35) + ".png";
      // initial = {...initial, url: image[counter]}
      // console.log(image[counter], initial.name);
      // counter++;
      // return initial
    }else{
      image[counter] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + initial.url.substring(34,36) + ".png";
    }
    counter++;
  })


  // console.log(numbers)


  if(pokemon.name === undefined){
    console.log('INDEFINIDO')
  
    return(
        <>
        {initials?.results.map((initial, index = 0) => {
          
          return(
            
            <div className={style.card} key={initial.name}>
              <div className={style.image}>
                <img 
                src={image[index]} 
                alt="" />
              </div>
              <div className={style.horizontalLine}/>
              <div className={style.name}>
                <p>{firstLetterToUpperCase(initial.name)}</p>
              </div>
              <div className={style.icons}>
                <Change name="Excluir" icon={trash}/>
                <div className={style.verticalLine}/>
                <Change name="Editar" icon={edit}/>
              </div>
            </div>
          )
        }
      )}
      </>
      )
  }else{
      return(
    
        <div className={style.card}>
          <div className={style.image}>
            <img 
            src={pokemon.sprites?.front_default} 
            alt="" />
          </div>
          <div className={style.horizontalLine}/>
          <div className={style.name}>
            <p>{firstLetterToUpperCase(pokemon.name)}</p>
          </div>
          <div className={style.icons}>
            <Change name="Excluir" icon={trash}/>
            <div className={style.verticalLine}/>
            <Change name="Editar" icon={edit}/>
          </div>
        </div>
      )
    }  
}

// {initials?.results.map((initial, index) => {
//   return(

//     <div className={style.card} key={initial.name}>
//       <div className={style.image}>
//         <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'} alt="" />
//       </div>
//       <div className={style.horizontalLine}/>
//       <div className={style.name}>
//         <p>{initial.name}</p>
//       </div>
//       <div className={style.icons}>
//         <Change name="Excluir" icon={trash}/>
//         <div className={style.verticalLine}/>
//         <Change name="Editar" icon={edit}/>
//       </div>
//     </div>

//   )
// })}