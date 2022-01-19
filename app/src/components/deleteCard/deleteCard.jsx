import React, { useState } from 'react';
import {
    Wrapper,
    Card,
    CardImg,
    CardImgBox,
    CardTitle,
    CardMessage,
    CancelButton,
    DeleteButton,
    ButtonsContainer,
    CloseCard,
    CloseIcon,
    Bg,
} from './style';


const DeleteCard = props => {
    const {handleClose} = props;


    const deleteItem = ()  => {
        alert("Funcionalidade ainda não implementada");
        handleClose();
    }

    return(
        <Wrapper >
                <Card>
                    <CloseCard onClick={handleClose}><CloseIcon/></CloseCard>
                    <CardImgBox>
                        <CardImg alt='Icone lixeira'/>
                    </CardImgBox>
                    <CardTitle>Excluir</CardTitle>
                    <CardMessage>Certeza que deseja excluir?</CardMessage>
                    <ButtonsContainer>
                        <DeleteButton onClick={deleteItem}>Excluir</DeleteButton>
                        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
                    </ButtonsContainer>
                </Card>     
            <Bg onClick={handleClose}/>
        </Wrapper>
    );
}

export default DeleteCard