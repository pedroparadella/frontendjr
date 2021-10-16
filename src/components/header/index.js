import react from 'react'
import Logo from '../../assets/logo-teste.svg'
import * as S from '../../style/header.js'

export default function Header(){
  return(
    <S.header>
      <S.image src={Logo}/>
    </S.header>
  )
}
