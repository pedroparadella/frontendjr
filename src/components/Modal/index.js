import {
  ContainerModal,
  BackgroundModal,
  Modal,
  IconeTrash,
  Exit,
  TxtBody,
  Footer,
} from "./estilos";

import ImgTrash from "../../img/Icon-trash.svg";

import GlobalStyle from "../../theme/GlobalStyle/estilo";

export default function ModalTrash({ closeModal }) {
  return (
    <BackgroundModal>
      <ContainerModal>
        <GlobalStyle />
        <Modal>
          <Exit>
            <button onClick={closeModal}></button>
          </Exit>
          <IconeTrash>
            <img src={ImgTrash} alt="Icone de lixeira" />
          </IconeTrash>
          <TxtBody>
            <p>Excluir</p>
            <p>CERTEZA QUE DESEJA EXCLUIR?</p>
          </TxtBody>
          <Footer>
            <button
              onClick={() => alert("Essa função ainda não foi implementada 🙁")}
            >
              Excluir
            </button>
            <button onClick={closeModal}>Cancelar</button>
          </Footer>
        </Modal>
      </ContainerModal>
    </BackgroundModal>
  );
}
