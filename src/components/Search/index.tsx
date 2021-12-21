import { useEffect,  useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { ISearchProps } from '../../interfaces/ISearchProps';
import lupa from '../../assets/img/lupa.svg';
import style from './Search.module.scss'

export function Search({setSearches}: ISearchProps){
  const [search, setSearch] = useState<string>('');
  const {setTitle} = useSearch();
  
  useEffect(() =>{
    setSearches(search.toLowerCase());
    setTitle({pokename: search.toLowerCase()});
  }, [search])

  return(
    <div className={style.container}>
      <div className={style.search}>
        <input 
          type="search" 
          onChange={event => setSearch(event.target.value)}
          value={search}
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