import { Container } from './styles'
import LogoTeste from '../../assets/logo-teste.png'

export default function Header() {
  return (
    <Container>
      <img src={LogoTeste} alt="logo" />
    </Container>
  )

}