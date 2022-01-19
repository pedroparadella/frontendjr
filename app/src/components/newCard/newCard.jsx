import React, { useState } from 'react';
import { 
    Header,
    NewItemIcon,
    SideMenu,
    Wrapper,
    Title,
    Divide,
    InputBox,
    Label,
    Input,
    Bg,
    NewCardButton,
    UploadInput,
    UploadInputBox,
    UploadButton,
    NotImplement,
} from './style';

const NewCard = props => {
    const {handleVisibility, } = props;
    const [value, setValue] = useState('');
    
    const onChange = e => {
        const {value} = e.target;
        setValue(value);
        console.log(value);
    }

    const createCard = () => {
        alert('Função ainda  não implementada');
        handleVisibility();
    }

// Não consegui fazer a animação quando o componente desmontar, mas pelo que li
// o ideal seria usar uma librarie para lidar com animações.


    return (
        <Wrapper >
            <Bg onClick={handleVisibility}/>
                <SideMenu>
                    <Header>
                        <NewItemIcon alt='novo item'/>
                        <Title>Criar card</Title>
                    </Header>
                    <Divide/>
                    <InputBox>
                        <Label>DIGITE UM NOME PARA O CARD</Label>
                        <Input
                            placeholder='Digite o título'
                        />
                    </InputBox>
                        <Label>INCLUA UMA IMAGEM PARA APARECER NO CARD</Label>
                            <UploadInputBox>
                                <p>{value !== '' ? value : "Nenhum arquivo selecionado"}</p>
                                <UploadButton htmlFor='uploadFile'>
                                    Escolher arquivo
                                    <UploadInput
                                        type='file'
                                        accept='image'
                                        id='uploadFile'
                                        value={value}
                                        onChange={onChange}
                                    />
                                </UploadButton>
                            </UploadInputBox>
                    <Divide/>
                    <NewCardButton onClick={createCard}>Criar card</NewCardButton>
                </SideMenu>
        </Wrapper>
    );    
} 



export default NewCard;