import {
    Container,
    ContainerModal,
    Modal,
    Icon,
    Exit,
    Text,
    Footer,
  } from "./style";


export default function DeleteCard({ onClick }: any) {
    return (
      <Container>
        <ContainerModal>
          <Modal>
            <Exit>
              <button onClick={onClick}></button>
            </Exit>
            <Icon>
              <img src='/assets/icon-trash.svg' alt="Icone de lixeira" />
            </Icon>
            <Text>
              <p>Excluir</p>
              <p>CERTEZA QUE DESEJA EXCLUIR?</p>
            </Text>
            <Footer>
              <button
                onClick={() => alert("Função ainda não implementada!!")}
              >
                Excluir
              </button>
              <button onClick={onClick}>Cancelar</button>
            </Footer>
          </Modal>
        </ContainerModal>
      </Container>
    );
  }