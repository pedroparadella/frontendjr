import { Change } from '../Change';
import { useEffect, useState } from 'react';
import { Initial } from "../../interfaces/IInitial";
import {ICardProps} from '../../interfaces/ICardProps';
import trash from '../../assets/img/Icon-trash.svg';
import edit from '../../assets/img/Icon-edit.svg';
import style from './Card.module.scss';
import axios from 'axios';
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';

export function Card({name, front_default, handleOpenDeleteModal, handleOpenNewCardModal}: ICardProps) {
  const [initials, setInitials] = useState<Initial>();

  async function getInitialPokemons(){
    const {data} = await axios.get<Initial>('https://pokeapi.co/api/v2/pokemon/');
    setInitials(data);
  }
  
  useEffect(() => {
    getInitialPokemons();
  },[]);

  //Pega o número dos pokemons para encontrar a imagem
  let image = [''];
  let counter = 0;

  initials?.results.map((initial) => {
    if(counter<9){
      image[counter] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + initial.url.substring(34,35) + ".png";
    }else{
      image[counter] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + initial.url.substring(34,36) + ".png";
    }
    counter++;
  })

  if(name === undefined){
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
                <Change 
                  color={"red"} 
                  name="Excluir" 
                  icon={trash} 
                  isModalOpen={handleOpenDeleteModal}
                />
                <div className={style.verticalLine}/>
                <Change 
                  color={"orange"} 
                  name="Editar" 
                  icon={edit}
                  isModalOpen={handleOpenNewCardModal}
                />
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
            src={front_default} 
            alt="" />
          </div>
          <div className={style.horizontalLine}/>
          <div className={style.name}>
            <p>{firstLetterToUpperCase(name)}</p>
          </div>
          <div className={style.icons}>
            <Change 
              color={"red"} 
              name="Excluir" 
              icon={trash}
              isModalOpen={handleOpenDeleteModal}
            />
            <div className={style.verticalLine}/>
            <Change 
              color={"orange"} 
              name="Editar" 
              icon={edit}
              isModalOpen={handleOpenNewCardModal}
            />
          </div>
        </div>
      )
    }  
}