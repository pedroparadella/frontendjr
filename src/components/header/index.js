import React from 'react'
import Logo from '../../assets/logo-teste.svg'
import * as S from '../../style/header.js'

export default function Header(){
  return(
    <S.Header>
      <S.Image src={Logo} alt="Logo 'Teste Ímpar'"/>
    </S.Header>
  )
}
