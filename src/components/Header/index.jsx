import logoImg from '../../assets/logo-teste.png'
import { Container, Content } from './styles'
export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logomarca da impar tecnologia" />
            </Content>
        </Container>
    )
}