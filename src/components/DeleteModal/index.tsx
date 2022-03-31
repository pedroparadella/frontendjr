import React, { useState } from 'react';
import Modal from 'react-modal'

import { Container, CloseButton,TopContent, FooterContent, Line, ImageContent, DataContent } from './styles';
import deleteicon from '../../assets/Icon-trash.svg'

interface ModalDeleteProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function DeleteModal({ isOpen, onRequestClose }: ModalDeleteProps) {

    function ManutencaoMessage(){
        alert("Poxa... infelizmente essa funcionalidade está em manutenção. Estamos trabalhando para normalizar a situação. Pedimos desculpa pelo transtorno.")
     
    }

    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}

            style={{
                overlay: {
                    position: 'absolute',
                    backgroundColor: '#F6F4F6CC',
                    zIndex: '6',
                   
                },
                content: {
                    margin: '0 auto',
                    position: 'relative',
                    height: '43.8rem',
                    width: '43.8rem',
                    border: '1px solid #ccc',
                    background: '#fff',
                    zIndex: '10',
                    overflow:'visible'
                }
            }}>
         
            <Container>
         <CloseButton onClick={onRequestClose}>X</CloseButton>
                <TopContent>  
                    <DataContent>
                        <ImageContent>
                            <img src={deleteicon} />
                        </ImageContent>
                    </DataContent>
                    <h3 className="cancel_header">Excluir</h3>
                    <p className="cancel_text">CERTEZA QUE DESEJA EXCLUIR?</p>
                </TopContent>
                <Line />
                <FooterContent>
                    <button onClick={ManutencaoMessage}>Excluir</button>
                    <button onClick={ManutencaoMessage} className="cancel_button">Cancelar</button>
                </FooterContent>
            </Container>



        </Modal>
    );
}

export default DeleteModal;
