import styled from 'styled-components';
import BgImage from '../../assets/fundo-busca.png';
import LupaSvg from '../../assets/lupa.svg';


export const Container = styled.div`
  
    width:100%;
    background-image:url(${BgImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 26.1rem;
    display:flex;
   
    opacity: 1;
`;

export const Content = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom:3.9rem;
    max-width:1046px;
    width:1046px;
  
`
export const SearchForm = styled.form`
    z-index:0;
    width:100%;
    display:flex;
    align-items:center;
    position: relative;
        img{
            position:absolute;
       
           right: 2.5rem;
        }
    
        input{
        background:var(--color-white 1);
        font-size:2.4rem;
        height:7.6rem;
        width:100%;
        border-radius:0.8rem;
        padding:2.2rem 2.8rem;
        outline:0;
            &:focus{
                color:var(--color-search-hover);
            }
            
            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: var(--color-search);
            } 
        
        }
    &:hover{
      
    }
`
export const SearchLupa = styled(LupaSvg)`
`

