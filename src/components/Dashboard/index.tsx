import style from './Dashboard.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { Search } from '../Search';
import { IPokemonInfo } from '../../interfaces/IPokemonInfo';
import { useSearch } from '../../hooks/useSearch';
import { IDashboardProps } from '../../interfaces/IDashboardProps';

export function Dashboard({onOpenDeleteCardModal, onOpenNewCardModal}: IDashboardProps){
  const[searches, setSearches] = useState('');
  const [pokemon, setPokemon] = useState<IPokemonInfo>();
  const {title} = useSearch();

  async function getPokemon(){
    const {data} = await axios.get<IPokemonInfo>('https://pokeapi.co/api/v2/pokemon/'+searches);
    setPokemon(data);
  }

  useEffect(()=>{
    getPokemon();
  }, [searches]);


  if(title.pokename !== pokemon?.name && title.pokename.length > 0){
    return(
      <>
        <Search setSearches={setSearches}/>
        <main className={style.container}>
          <div className={style.newCard}>
            <span>Resultado de busca</span>
            <button onClick={onOpenNewCardModal}>Novo card</button>
          </div>
          <div className={style.notFound}>
            <span>Pokemon não encontrado!</span>   
          </div>
        </main>
      </>
    );
  }else{
    return(
      <>
        <Search setSearches={setSearches}/>
        <main className={style.container}>
          <div className={style.newCard}>
            <span>Resultado de busca</span>
            <button onClick={onOpenNewCardModal}>Novo card</button>
          </div>          
        <div className={style.cards}>
            <Card 
              name={pokemon?.name} 
              front_default={pokemon?.sprites?.front_default} 
              handleOpenDeleteModal={onOpenDeleteCardModal} 
              handleOpenNewCardModal={onOpenNewCardModal}
            />
          </div>
        </main>
      </>
    );
  }
}