import Icone_Card from "../../img/icone_criar.png";

import GlobalStyle from "../../theme/GlobalStyle/estilo";
import {
  FullSidebar,
  SidebarContainer,
  Sidebar,
  Header,
  Body,
  Footer,
  ExitSidebar,
} from "./estilos";

export default function ModalLateral({ closeModal }) {
  return (
    <FullSidebar>
      <ExitSidebar onClick={closeModal} />
      <SidebarContainer>
        <GlobalStyle />
        <Sidebar>
          <Header>
            <img src={Icone_Card} alt="Ícone da criação do card" />
            <p>Criar card</p>
          </Header>
          <Body>
            <div>
              <p>DIGITE UM NOME PARA O CARD</p>
              <input type="text" placeholder="Digite um título" />
            </div>
            <div className="fake-file">
              <p>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
              <input type="file" placeholder="Nenhum arquivo selecionado  " />
              <button>Escolher um arquivo</button>
            </div>
          </Body>
          <Footer>
            <button
              onClick={() => alert("Essa função ainda não foi implementada 🙁")}
            >
              Criar um card
            </button>
          </Footer>
        </Sidebar>
      </SidebarContainer>
    </FullSidebar>
  );
}
