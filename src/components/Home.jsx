import React, { useEffect, useState } from 'react';
import Header from './Header';
import Cards from './Cards';
import Busca from './Busca';
import {Button} from './Button';
import ModalAdd from './ModalAdd';
import styled from 'styled-components';
import db from '../api/firebaseConnection'
import { collection, getDocs, query, where } from 'firebase/firestore'


import '../css/style.css'


const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: -1%;
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-around;
`;

function Home(){
    const [cards, setCards] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [textoDigitado, setTextoDigitado] = useState('');
    
    useEffect(() => {

       if(textoDigitado === ''){
        (async function getCards(){
            const snapshot = await getDocs(collection(db, "cards"))

            let list = []
    
            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    txt: doc.data().text,
                    img: doc.data().imgfile
                })
            });
            setCards(list)
            return
        })()}

        if(textoDigitado !== ''){
            (async function getFilterCards(){
 
                const collectionRef = collection(db, "cards");  
                const q = query(collectionRef, where("text", "==", textoDigitado) )
                const snapshot = await getDocs(q);
                
                let list = []
                snapshot.forEach((doc) => {
                    
                    list.push({
                        id: doc.id,
                        txt: doc.data().text,
                        img: doc.data().imgfile
                        })  
                })
                setCards(list)

                return
            })()
            
        }
        
    },[textoDigitado, modalShow ])

    return(
    <> 
        <Header />
        <Busca txt={setTextoDigitado} /> 

        <ModalAdd 
        show={modalShow}
        showC={setModalShow}
        />

        <Container >

            <div className='results'>
                <p>Resultado de busca</p>
                <Button onClick={() => {setModalShow(true)}}>Novo Card</Button>
            </div>
         
            <Items >
                {
                    cards.map((itens) => {
                        return(
                        <Cards
                        key={itens.id}
                        textCard={itens.txt}
                        imagemCard={itens.img}
                        id={itens.id}
                        />
                        )
                    })
                }
                
                
            </Items>
            
        </Container>
    </>  
    )
}

export default Home