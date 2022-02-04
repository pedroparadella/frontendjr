import { useState } from 'react/cjs/react.development'
import {
    ContainerSidebar,
    SidebarCard,
    TituloCard,
    FormCard,
    InputCard,
    LabelCard,
    ButtonCreate,
    ButtonSubmit,
    UploadImg,
    InputUpload,
    LabelUpload,
    SpanUpload,
    AreaClose
} from './style'

const Sidebar = ({show,active}) =>{
    const [ArchiveUpload, setArchiveUpload] = useState()
    const HandleAddArchive = (archive) =>{
        setArchiveUpload(archive)
    }  
    return(
        <ContainerSidebar className={show ? 'ContainerSidebar active' : ContainerSidebar}>
            <AreaClose onClick={active}/>
            <SidebarCard> 
                <TituloCard>Novo Card</TituloCard> 
                <FormCard>
                    <LabelCard>DIGITE UM NOME PARA O CARD</LabelCard>
                    <InputCard placeholder='Digite o título'></InputCard>
                    <LabelCard>INCLUA UMA IMAGEM PARA APARECER NO CARD</LabelCard>
                    <UploadImg>
                        <LabelUpload>
                            {/* <span>{ArchiveUpload}</span> */}
                            <span>Nenhum arquivo selecionado</span>
                            <SpanUpload color={"btn_warning_outline"}>Escolher arquivo</SpanUpload>   
                            <InputUpload type='file'value={ArchiveUpload} onChange={(ev) =>HandleAddArchive(ev.target.value)}></InputUpload>
                        </LabelUpload>
                    </UploadImg>
                </FormCard>
                <ButtonSubmit>
                    <ButtonCreate color={"btn_warning"} onClick={() => {alert('Não Implementado!')}}>Criar Card</ButtonCreate>
                </ButtonSubmit>
            </SidebarCard>
        </ContainerSidebar >
    )
}
export default Sidebar