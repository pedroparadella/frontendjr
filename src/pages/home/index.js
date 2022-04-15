import logo from "../../img/logo-teste.svg";
import background_busca from "../../img/fundo-busca.png";
import lupa from "../../img/lupa.svg";

import Card from "../../components/Card";
import Sidebar from "../../components/sidebar";
import Modal from "../../components/Modal";

import { useState } from "react";

import { Menu, Banner, Busca, Header, Container } from "./estilos";
import GlobalStyle from "../../theme/GlobalStyle/estilo";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState("");

  const [loadList, setLoadList] = useState(true);

  const onChange = (e) => {
    setData(e.target.value);
    if (e.target.value.length === 0) {
      setLoadList(true);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Menu>
        <img src={logo} alt="Logo"></img>
      </Menu>
      <Banner>
        <img src={background_busca} alt="Background de busca"></img>
        <Busca>
          <input
            type="text"
            className="input"
            placeholder="Digite aqui sua busca..."
            onChange={onChange}
          />
          <button type="submit">
            <img src={lupa} alt="Lupa de busca"></img>
          </button>
        </Busca>
      </Banner>
      <Header>
        <p>Resultado de busca</p>
        <button onClick={() => setShowSidebar(true)}>Novo Card</button>
      </Header>
      <Container>
        <Card data={data} loadList={loadList} />
      </Container>
      {showSidebar && <Sidebar closeModal={() => setShowSidebar(false)} />}
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </>
  );
}
