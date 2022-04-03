import { useState } from 'react';
import styled from 'styled-components'
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit'
import iconTrash from '../img/Icon-trash.png'
import iconEdit from '../img/Icon-edit.png'

const Card = styled.div`
    margin-top: 2%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    width: 234px;
    height: 267px;
    text-align: center;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    opacity: 1;
    word-wrap: break-word;
    position: relative;
`;

const Imagem = styled.img`
    height: 95px;
    width: 95px;
    margin-top: 10%;
    border-radius: 50%;
`;

const Hr = styled.hr`
    margin: 8% auto 8% auto;
    width: 50%;
    border: 1px solid #F0EFF0
`;

const GrupoBotao = styled.div`
    bottom: 0;  
    position: absolute;
    width: 100%;
`;

const Botao = styled.button`
    width: 50%;
    padding: 8px;
    border: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    &:hover {background-color: lightblue;}
`;
const Text = styled.text`  
    margin: auto;
    width: 191px;
    height: 40px;
    text-align: center;
    font: normal normal normal 16px/20px Candara;
    letter-spacing: 0px;
    color: #263238;
    opacity: 1;
`;

const Icon = styled.img`
    margin: 3%; 
    position: absolute;
`;

function Cards(props){
    const [deleteShow, setDeleteShow] = useState(false)
    const [editShow, setEditShow] = useState(false)

    return(
    <>
        <ModalDelete 
          show={deleteShow}
          showC={setDeleteShow}
          id={props.id}
        />

        <ModalEdit 
           show={editShow}
           showC={setEditShow}
           text={props.textCard}
           imagem={props.imagemCard}
           id={props.id}
        />

        <Card>
                <Imagem src={props.imagemCard} alt="imagemcard"/>
                <Hr />
                <Text>{props.textCard}</Text>
                    <GrupoBotao >
                        <Icon src={iconTrash} alt="iconedeletar" />
                        <Botao onClick={() => {setDeleteShow(true)}}>Excluir</Botao>
                        
                        <Icon src={iconEdit} alt="iconeeditar" />
                        <Botao onClick={() => {setEditShow(true)}}>Editar</Botao>
                     </GrupoBotao>
        </Card>
    </>
    )
}

export default Cards