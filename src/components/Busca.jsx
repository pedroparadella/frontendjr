import { useState } from "react";
import styled from "styled-components";
import lupa from '../img/lupa.png'

const CaixaAlign = styled.div`
    margin: -8% auto auto auto;
    width: 50%;
    display:flex;
    position: relative;
`;

const CaixaBusca = styled.input`
    width: 100%;
    height: 75px;
    margin-top: -2%;
    border-radius: 8px;
    opacity: 1;
    border-style: none;
    border-color: white;
    font: normal normal 300 24px/30px Candara;
`;

const Img = styled.img`
    z-index: 1;
    margin-left: 90%; 
    position: absolute;
`;


function Busca(props){
    const [text, setText] = useState('')

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            
            props.txt(text)
        }}>
            <CaixaAlign align='center'>
            
                <CaixaBusca 
                type="text"
                placeholder='Digite aqui sua busca...'
                value={text}
                onChange={(event) => {
                    setText(event.target.value)
                }}
                />
                <Img src={lupa} alt="icone" />
            </CaixaAlign>
            
        </form> 
    )
}


export default Busca