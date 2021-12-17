import React, { useEffect,  useState } from 'react';
import lupa from '../../assets/img/lupa.svg';
import { useSearch } from '../../hooks/useSearch';
import style from './Search.module.scss'

interface Props{
  setPesquisas: React.Dispatch<React.SetStateAction<string>>
}

export function Search({setPesquisas}: Props){
  const [pesquisa, setPesquisa] = useState<string>('');

  const {title, setTitle} = useSearch();

  // function attPesquisa(event: React.FormEvent<HTMLFormElement>){
  //   event.preventDefault();
  // }
  
  useEffect(() =>{
    setPesquisas(pesquisa.toLowerCase()); //SEARCH **********
    setTitle({pokename: pesquisa.toLowerCase()}); //CONTEXTO
  }, [pesquisa])

  


  return(
    <div className={style.container}>
      <div className={style.search}>
        <input 
          className={style.teste}
          type="search" 
          onChange={event => setPesquisa(event.target.value)}
          value={pesquisa}
          placeholder="Digite aqui sua busca..." 
        /> 
        <img 
          src={lupa} 
          alt="lupa" 
        />
      </div>
    </div>
  )
}