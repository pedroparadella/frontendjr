import style from './Header.module.scss';
import logoTeste from '../../assets/img/logo-teste.png';
import { useSearch } from '../../hooks/useSearch';

export function Header() {
  const {title, setTitle} = useSearch();

  console.log(title, 'Title do header');

  return(
    <>
    <header>
      <div className={style.divPurple}>
        <img 
          src={logoTeste} 
          alt="Logo teste" 
        />
      </div>
      <div className={style.backgroundSearch}/>
    </header>
    </>
  );
}