import styled from 'styled-components';

export const Container = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:  flex-start;
    justify-content: space-around;

    button{
        height:4.8rem;
        width: 17.3rem;
        border-radius:8px;
        margin-top:3rem;;
        background: var(--color-emphasis);
        font-family:Mulish, sans-serif;
        font-weight:bold;
        color: var(--color-white);

        transition:filter 0.2s;
        &:hover{
            filter:brightness(0.9);
        }
    }
    label{
        margin-top:5.0rem;
        margin-bottom:1.0rem;
        color:var(--color-text);
        font-size:1.4rem;
        font-family:Mulish, sans-serif;
        line-height:1.8rem;
        text-align: left;
        font: normal normal bold 14px/18px Muli;
    }
    input{
        display:flex;
        padding-left:2rem;
        text-align: left;
        width:100%;
        border: 1px solid #B9B9B9;
        border-radius: 8px;
        height: 6.0rem;
        opacity: 1;
        font-family:Mulish, sans-serif;
        font-weight:light;
}
        background: var(--color-white) 0% 0% no-repeat padding-box;
    
    input[type=file]{
        color:white;
        text-align: left;
        padding-top:0.5rem;
        margin-bottom:0.5rem;
        
        

        
    }
    input[type=file]::file-selector-button {
        margin-top:0.2rem;
        float:right;
        color: var(--color-emphasis);
        border:1px solid var(--color-emphasis);
        background:var(--color-white);
        padding: .2em .4em;
        border-radius: .8rem;
        height:85%;
        width: 17.3rem;
        font-family:Mulish, sans-serif;
        font-weight:bold;
}`;
export const ModalHeader = styled.div`
    padding-top:4.5rem;
    display:flex;
    align-items:center;
    justify-content:flex-start;

    img{
        height:4.6rem;
        width:4.6rem;

    }
    h1{
        padding-left:1.8rem;
        font-size:3.2rem;
        color:#5F1478;
        font-family:Mulish, sans-serif;

    }
    
`;
export const Line = styled.div`
    margin:0.5rem;
    margin-top:2.2rem;
    height:1px;
    width:100%;
    background:#E4E4E4;
    opacity: 0.5;
  
`
