import styled from "styled-components";
import icon from '../img/icone_delete.png'
import {ButtonDelete, ButtonCancel, GrupoBotao} from "./Button";
import db from '../api/firebaseConnection'
import { doc, deleteDoc } from 'firebase/firestore'

const ModalStyled = styled.div`
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        
`;

const ModalContent = styled.div`
    display: block;
    background-color: #fefefe;
    margin: 13% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 438px;
    height: 434px;
    float: center;
    font: normal normal bold 32px/40px Muli;
    opacity: 1;
`;

const H3 = styled.h3`
    text-align: center;
    font: normal normal bold 32px/40px Candara;
    letter-spacing: 0px;
    color: #DB2525;
    opacity: 1;
    margin-top: 5%;
`;

const Hr = styled.hr`
    margin: 10% auto;
    width: 85%;
    border: 1px solid #F0EFF0
`;

const P = styled.p`
    margin-top: 8%;
    font: normal normal bold 14px/18px Candara;
    letter-spacing: 0px;
    color: #454545;
    text-transform: uppercase;
    opacity: 1;
    text-align: center;
`;

const Img = styled.img`
    width:20%;
    height:20%;
    margin-top: 10%; 
`;


function ModalDelete(props){

    async function handleClickDeleteCard(){
 
        try {
            await deleteDoc(doc(db, "cards", props.id));
            window.location.reload(false);
          } catch (e) {
            console.error("Error adding document: ", e);
          }       
    }

    if(props.show){
        
    return (
        <ModalStyled onClick={props.onHide}>
            <ModalContent>
                <div align='center'>
                <Img src={icon} alt="iconedeletar" />
                </div>
                <H3>Excluir</H3>
                
                <P>CERTEZA QUE DESEJA EXCLUIR?</P>
                
                <Hr></Hr>

                <GrupoBotao>
                    <ButtonDelete onClick={() => {handleClickDeleteCard()}}>Excluir</ButtonDelete>
                    <ButtonCancel onClick={() => { props.showC(false)}}>Cancelar</ButtonCancel>
                </GrupoBotao>
                
            </ModalContent>
        </ModalStyled>
    
     )}

}

export default ModalDelete