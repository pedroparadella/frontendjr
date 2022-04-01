import styled from 'styled-components';
import logo from '../../assets/logo-teste.png'
export const Container = styled.header`
    background: transparent linear-gradient(272deg, var(---cor-secundaria) 0%, var(---cor-primaria) 100%) 0% 0% no-repeat padding-box;
    
`;
export const Content = styled.div`
    position: relative;
    height: 64px;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    max-width: 1440px;
    margin: 0 auto;

    .image {
        background: transparent url(${logo}) 0% 0% no-repeat padding-box;
        position: absolute;
        top: 14px;
        left: 24px;
        width: 192px;
        height: 37px;
        opacity: 1;
    }
`;
    