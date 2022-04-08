import styled from "styled-components"
import imgBanner from '../../assets/fundo-busca.png'

export const Container = styled.main`
    background: transparent url(${imgBanner}) 0% 0% no-repeat padding-box;
    width: 100%;
    height: 16rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Content = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: min(100%, 65rem);
    margin-top: 6rem;
    height: 5rem;
        
        input{
            width: 100%;
            height: 100%;
            padding: 1.4375rem 1.75rem ;
            outline: none;
            border: none;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            font-weight: 300;
        
                &::-webkit-input-placeholder{
                    color: var(--light-text-color);
                    transition: all .2s ease-in-out;
                }
                &:hover::-webkit-input-placeholder{
                    color: var(--dark-text-color);
                }
        }
        button{
            position: absolute;
            right: 1rem;
            background: transparent;
            outline: none;
            border: none;
        }
`