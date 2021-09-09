import  React from 'react';
import styled from 'styled-components';
import logo from './../../icons/logo-teste.svg';

const Bar = styled.div`
    width: 100%;
    height: 64px;
    background: transparent linear-gradient(272deg, \
                           var(--cor-secundaria) 0%, \
                           var(--cor-primaria) 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    position: fixed;
    z-index: 999;
    top: 0;
`;

const Img = styled.img`
top: 14px;
left: 24px;
position: absolute;
width: 192px;
height: 37px;
`;

const AppBar = () => {
    return (
        <Bar>
        <Img src={logo}/>
        </Bar>
    );
}



export default AppBar;