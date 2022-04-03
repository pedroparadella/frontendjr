import { useEffect, useState } from "react";
import styled from "styled-components";
import icon from '../img/icone_criar.png'
import {Button, GrupoBotao} from "./Button";
import db from '../api/firebaseConnection'
import { doc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

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

const ModalContent = styled.form`
    position:fixex;
    z-index: 0;
    display: block;
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
    Height: 70%;
    float: right;
    font: normal normal bold 32px/40px Muli;
    opacity: 1;
`;

const H3 = styled.h3`
    color:#5F1478;
    display: inline-block;
`;

const Hr = styled.hr`
    margin: 5% auto;
    width: 85%;
    border: 1px solid #F0EFF0
`;

const P = styled.p`
    margin-top: 5%;
    font: normal normal bold 14px/18px Candara;
    letter-spacing: 0px;
    color: #454545;
    text-transform: uppercase;
    opacity: 1;
    text-align: center;
`;

const Input = styled.input`
    margin-top: 5px;
    margin-left: 15%;
    width: 75%;
    height: 8%;
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font: normal normal 300 18px/23px Muli;
    letter-spacing: 0px;
    color: #757575;
    
`;

function ModalEdit(props){
    const [nomeCard, setNomeCard] = useState('')
    const [image, setImage] = useState()
    const [urlImage, setUrlImage] = useState()
    const storage = getStorage();

    async function handleClickAddCard(){
        
        if(nomeCard === ''){
            setNomeCard(props.text)
        }

        if(!image){
            setUrlImage(props.imagem)
            return
        }

        const storageRef = ref(storage, image.name);

           await uploadBytes(storageRef, image).then((snapshot) => {

                getDownloadURL(storageRef).then((response) => {
                   setUrlImage(response)
                })
  
            }) 
            
    }

    useEffect(() => {
        async function editCards(){
            if(!urlImage){
                return
            }

            try {
                const docRef = doc(db, "cards", props.id);
                await updateDoc(docRef, {
                    text: nomeCard,
                    imgfile: urlImage
                  })
                window.location.reload(false);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        } editCards()
    },[urlImage])

    if(props.show){
        
    return (
        <ModalStyled onClick={props.onHide}>
            <ModalContent >
          
                <img src={icon} alt="iconecriar" /> <H3>Editar Card</H3>
                
                <Hr></Hr>
                
                <P>DIGITE UM NOME PARA O CARD</P>
                <Input 
                type="text" 
                value={nomeCard}
                placeholder={props.text}
                onChange={(event) => {
                    setNomeCard(event.target.value)
                }}
                maxLength={60}
                />
                
                <br />
                
                <P>INCLUA UMA IMAGEM PARA APARECER NO CARD</P>
                <Input 
                type="file" 
                onChange={(event) => {
                    setImage(event.target.files[0])
                }}
                />
                
                <Hr></Hr>

                <GrupoBotao>
                    <Button type='button' onClick={() => {props.showC(false)}}>Cancelar</Button>
                    <Button type='button' onClick={() => {handleClickAddCard()}}>Editar Card</Button>
                </GrupoBotao>
                
            </ModalContent>
        </ModalStyled>
     )}

}

export default ModalEdit