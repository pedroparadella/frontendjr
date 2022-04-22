import imgLogoTeste from '../../Assets/Images/logo-teste.png'
import './Styles/style-header.scss'
import './Styles/position-header.scss'

export const Header = () => { 

  return (
    <header className='header'>
      <img className='logo-teste' alt='Imagem de Uma logo escrita Teste Ímpar' src={imgLogoTeste}/>
    </header>
  )
}