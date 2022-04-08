import { Container, Content } from "./styles";
import imgMagnifyingGlass from '../../assets/lupa.png'
import { useState } from "react";


export function Banner(props){
    const [search, setSearch] = useState('')
    const {onSearch} = props


    const onChangeSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
        if(e.target.value === ''){
            onSearch(undefined)
        }
    }

    const buttonSearch = async () => {
        onSearch(search)
    }

    return(
        <Container>
            <Content>
                <input 
                    type="text" 
                    placeholder="Digite aqui sua busca..."
                    onChange={onChangeSearch}
                />
                <button
                    onClick={buttonSearch}
                >
                    <img src={imgMagnifyingGlass} alt="Botão de Pesquisar" />
                </button>

            </Content>
        </Container>
    )
}