import React from 'react'
import Logo from '../../assets/images/linkedin.png'
import Logo2 from '../../assets/images/github.png'
import Logo3 from '../../assets/images/instagram.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <React.Fragment>
    <footer>
      <ul id="textJob">
        <h4>Vamos Trabalhar Juntos!</h4>
        <br></br>
        <li>
          Alexandre Eletherio de Brito Junior
        </li>
        <br></br>
        <li>
          Tel. para Contato: (21) 97351-6340
        </li>
        <br></br>
        <li>
          São Gonçalo, Rio de Janeiro
        </li>
      </ul>
      <ul id="socialMedia">
        <li className="logo3">
          <a href="https://www.instagram.com/_eletherioalex/" target="_blank" rel="noreferrer"><img src={Logo3} alt=" " /></a>
        </li>
        <li className="logo">
          <a href="https://www.linkedin.com/in/alexandre-eletherio-ab799719a/" target="_blank" rel="noreferrer"> <img src={Logo} alt=" " /></a>
        </li>
        <li className="logo2">
          <a href="https://github.com/EletherioAlexandre" target="_blank" rel="noreferrer"><img src={Logo2} alt=" " /></a>
        </li>
      </ul>
    </footer>

  </React.Fragment>
)