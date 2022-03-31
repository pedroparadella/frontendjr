import { useState } from 'react'

import { Container, Line, Content, ImageContent, TextContent, CardFooter } from './styles';
import handImg from '../../assets/icone.svg'
import editIcon from '../../assets/Icon-edit.svg'
import deleteicon from '../../assets/Icon-trash.svg'


import { DeleteModal } from '../DeleteModal'

interface CardItensProps {
    text: string,
    svg?: string
}

export function CardItem({ text, svg }: CardItensProps) {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true)

    }
    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false)

    }
    function ManutencaoMessage(){
        alert("Poxa... infelizmente essa funcionalidade está em manutenção. Estamos trabalhando para normalizar a situação. Pedimos desculpa pelo transtorno.")
     
    }

    return (

        <Container>
            <Content>
                <ImageContent>
                    <img src={handImg} alt="Aqui fica a logo" />
                </ImageContent>
                <Line></Line>
                <TextContent>
                    <p>{text}</p>
                </TextContent>
            </Content>
            <CardFooter>
                <span><img src={deleteicon} onClick={handleOpenDeleteModal} /> Excluir</span>
                <span><img src={editIcon} onClick={ManutencaoMessage}  />Editar</span>
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={handleCloseDeleteModal}
                />
            </CardFooter>


        </Container>

    );
}
