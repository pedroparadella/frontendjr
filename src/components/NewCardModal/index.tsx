import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import { Container, ModalHeader, Line } from './styles';
import createIcon from '../../assets/icone_criar.svg';

import { useNewCardContext } from '../../hooks/useNewCard';

interface NewCardModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewCardModal({ isOpen, onRequestClose }: NewCardModalProps) {

    const [text, setText] = useState(' ');
    const [selectedFile, setSelectedFile] = useState(false);

    const { createCard } = useNewCardContext();

    async function handleCreateNewCard(event: FormEvent) {
        event.preventDefault();
        await createCard({
            text,
            selectedFile
        })
        setText('')
        setSelectedFile(false);
        onRequestClose();
    }

    const changeHandler = (event: FormEvent) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
        console.log(event.target.files)
        setSelectedFile(true);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    zIndex: '999'
                },
                content: {
                    position: 'fixed',
                    top: '0px',
                    height: '100vh',
                    left: '1600x',
                    right: '0px',
                    width: '64.2rem',
                    border: '1px solid #ccc',
                    background: '#fff',
                }
            }}
        >
            <Container onSubmit={handleCreateNewCard}>
                <ModalHeader>
                    <img src={createIcon} />
                    <h1>Criar Card</h1>
                </ModalHeader>
                <Line />
                <label>DIGITE UM NOME PARA O CARD</label>
                <input type="text"
                    placeholder="Digite o título"
                    value={text}
                    onChange={event => setText(event.target.value)}>
                </input>
                <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                <input type="file"
                    name="file"
                    onChange={changeHandler}>
                </input>
                <Line />
                <button type="submit"> Criar Card</button>
            </Container>
        </Modal>
    );
}

export default NewCardModal;