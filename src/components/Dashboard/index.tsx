import { useEffect, useState } from 'react';
import { Card } from '../Card';
import { Search } from '../Search';
import style from './Dashboard.module.scss';
import axios from 'axios';
import { IPokemonInfo } from '../../interfaces/IPokemonInfo';
import { useSearch } from '../../hooks/useSearch';
import { Change } from '../Change';

interface DashboardProps{
  onOpenDeleteCardModal: () => void;
}

export function Dashboard({onOpenDeleteCardModal}: DashboardProps){
  const[searches, setSearches] = useState('');
  const [pokemon, setPokemon] = useState<IPokemonInfo>();
  const {title, setTitle} = useSearch();

  console.log(title, 'Title do dashboard');
  

  async function getPokemon(){
    const {data} = await axios.get<IPokemonInfo>('https://pokeapi.co/api/v2/pokemon/'+searches);
    setPokemon(data);
  }
  
  // console.log(pokemon)
  // console.log(searches)

  useEffect(()=>{
    getPokemon();
    // console.log(searches)
  }, [searches]);

  useEffect(() =>{
    setTitle({pokename: ''});
  }, [])

  if(title.pokename !== pokemon?.name && title.pokename.length > 0){
    //PRESTAR ATENÇÃO NESSE CONTEXTO E VER SE É NECESSARIO MESMO
    return(
      <>
        <Search setPesquisas={setSearches}/>
        <main className={style.container}>
          <div className={style.newCard}>
            <span>Resultado de busca</span>
            <button onClick={onOpenDeleteCardModal}>Novo card</button>
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
        <Search setPesquisas={setSearches}/>
        <main className={style.container}>
          <div className={style.newCard}>
            <span>Resultado de busca</span>
            <button >Novo card</button>
          </div>
          
            <div className={style.cards}>
              <Card 
                name={pokemon?.name} 
                front_default={pokemon?.sprites?.front_default} 
                handleOpenModal={onOpenDeleteCardModal} 
              />
            </div>
          
        </main>
      </>
    );
  }

}