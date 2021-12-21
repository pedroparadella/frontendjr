import style from './Header.module.scss';
import logoTeste from '../../assets/img/logo-teste.png';

export function Header() {
  return(
    <>
    <header>
      <div className={style.divPurple}>
        <img 
          src={logoTeste} 
          alt="Logo" 
        />
      </div>
      <div className={style.backgroundSearch}/>
    </header>
    </>
  );
}