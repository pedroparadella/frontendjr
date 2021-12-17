import React from 'react'
import logo from '../../assets/images/logo-teste.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (

  <React.Fragment>
    <header>
      <div className='obj'>
        <span id="logoTeste">
          <a href=" http://localhost:3000" content="3"><img src={logo} alt="Teste de Verificação de Habilidade" /></a>
        </span>
      </div>
    </header>
  </React.Fragment>
);