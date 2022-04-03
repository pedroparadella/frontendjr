import styled from 'styled-components'
import logo from '../img/logo-teste.png'
import fundo from '../img/fundo-busca.png'

const HeaderStyle = styled.div`
    background: rgb(95,20,120);
    background: linear-gradient(-272deg, rgba(95,20,120,1) 35%, rgba(174,39,111,1) 100%);
    height: 70px;
    position: relative;
`;

const ImagemLogo = styled.img`
    margin-left: 15px;
    margin-top: 15px;
`;

const ImagemStyle = styled.div`
    margin-top: -4%;
`;

const ImagemHeader = styled.img`
    width: 100%;
`;

function Header(){

    return(
     <>
        <HeaderStyle className='header'>
            <ImagemLogo src={logo} alt="logo"/>
        </HeaderStyle>

        <ImagemStyle >
            <ImagemHeader src={fundo} alt="fundo"/>
        </ImagemStyle>
        </>
    )

}

export default Header