import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return(
    <Container>
    <header>
       <img src={logoImg} alt="Aqui fica a logo da Ímpar"/>
    </header>
    </Container>
  ) 
}
