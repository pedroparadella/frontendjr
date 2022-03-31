import styled from 'styled-components';

export const Container = styled.div`
  font-family:Mulish, sans-serif;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background:var(--color-white);
    position:relative;
    z-index:100;
    overflow:visible;
   
`;
export const CloseButton = styled.div`
 width:3.6rem;
 height:3.6rem;
 border-radius:50%;
 background:#E76316;
 position:absolute;
 top:-4.0rem;
 right:-3.5rem;
 display:flex;
 align-items: center;
 justify-content:center;
 color:var(--color-white);
 font-weight:bold;
 cursor:pointer;

`
export const TopContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:25.0rem;
    
    .cancel_header{
        color: var(--color-error);
        font-size:3.2rem;
        margin-top:2.5rem;
       // font-weight:1000;
    }
    .cancel_text{
        color: var(--color-text);
        font-size:1.2rem;
        margin-top:1.0rem;
        font-weight:bold;
       
    }
    
`
export const DataContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:100%;
  
`
export const FooterContent = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    padding-bottom:0;
    margin-bottom:0px;
    height:10rem;
    width:100%;
    position:absolute;
    top:100%;
    button{
        height:4.8rem;
        width: 17.3rem;
        border-radius:8px;
        background: var(--color-error);
        font-family:Mulish, sans-serif;
        font-weight:bold;
        color: var(--color-white);

        transition:filter 0.2s;
        &:hover{
            filter:brightness(0.9);
        }
    }
    .cancel_button{
        background: var(--color-white);
        color:  var(--color-error);
        border: 1px solid var(--color-error);
             
    }
`
export const Line = styled.div`
    margin:0.5rem;
    margin-top:2.2rem;
    height:1px;
    width:100%;
    background:#E4E4E4;
    opacity: 0.5;
  
`
export const ImageContent = styled.div`
    height:15.9rem;
    width:15.9rem;
    background:#DB25250F;
    border-radius:50%;
    border: 6px solid #E4E4E4;
    display:flex;
    align-items:center;
    justify-content:center;


    img{
        width:6.4rem;
        height:6.4rem;
    }


`