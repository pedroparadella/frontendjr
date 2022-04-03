import { useEffect, useState } from "react";
import styled from "styled-components";
import icon from '../img/icone_criar.png'
import {Button, GrupoBotao} from "./Button";
import db from '../api/firebaseConnection'
import { collection, addDoc } from 'firebase/firestore'
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

function ModalAdd(props){
    const [nomeCard, setNomeCard] = useState('')
    const [image, setImage] = useState()
    const [urlImage, setUrlImage] = useState()
    const storage = getStorage();

    async function handleClickAddCard(){
        if(!image){
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
        async function addCards(){
            if(!nomeCard){
                return
            }
            try {
                await addDoc(collection(db, "cards"), {
                  text: nomeCard,
                  imgfile: urlImage
                });
                setNomeCard('')
                setImage('')
                props.showC(false)
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        } addCards()
    },[urlImage])

    if(props.show){
        
    return (
    <>
        <ModalStyled onClick={props.onHide}>
            <ModalContent onSubmit={(event) =>{
                event.preventDefault()
            }}>

                <img src={icon} alt="iconecriar" /> <H3>Criar Card</H3>
                
                <Hr></Hr>
                
                <P>DIGITE UM NOME PARA O CARD</P>

                <Input 
                type="text" 
                value={nomeCard}
                placeholder={"Digite o título"}
                onChange={(event) => {
                        setNomeCard(event.target.value)
                }}
                maxLength={60}
                required
                />
                
                <br />
                
                <P>INCLUA UMA IMAGEM PARA APARECER NO CARD</P>
 
                <Input 
                type="file" 
                onChange={(event) => {
                    setImage(event.target.files[0])
                }}
                required
                />
                
                <Hr></Hr>

                <GrupoBotao>
                    <Button  onClick={() => {props.showC(false)}}>Cancelar</Button>
                    <Button  onClick={() => {handleClickAddCard()}}>Criar Card</Button>
                </GrupoBotao>
                
            </ModalContent>
        </ModalStyled>
    </> 
     )}

}

export default ModalAdd