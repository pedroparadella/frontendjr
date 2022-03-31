import styled from 'styled-components';

export const Container = styled.div`
    flex-grow:1;
    width:23.4rem;
    max-width:23.4rem;
    height:26.7rem;
    max-height:26.7rem;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items: center;
    background:var(--color-white);
    box-shadow: 0px 3px 6px #E5E5E5;

`;

export const Content = styled.div`

 display:flex;
    flex-direction:column;
    align-items: center;
    width:85%;
   height:70%;
    margin:2.8rem 7.0rem 2.0rem;
    overflow: hidden;
  

`

export const ImageContent = styled.div`
    height:9.5rem;
    width:9.5rem;
    background:var(--color-bg);
    border-radius:50%;
    border: 1px solid #E4E4E4;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width:6.4rem;
        height:6.4rem;
    }


`
export const TextContent = styled.div`
    padding:0.5rem;
    font-family:Mulish, sans-serif;
    font-weight:500;
    line-height:2.0rem;
    color: #263238;
    font-size:1.6rem;
    text-align: center;
    text-overflow:clip;
    letter-spacing: 0px;
    display:block;
    

`
export const CardFooter = styled.div`
    height:4.3rem;
    margin-bottom:0px;
    background:#0000000F 0.2;
    color:black;
    width:100%;
    height:4.3rem;
    padding-bottom:0px;
    box-shadow: inset 0px 3px 6px #0000000F;
    display:flex;
    justify-content:space-around ;
    align-items: center;
    opacity:0.7;

    span{ 

        display:flex;
        color:#263238;
        font-family:Mulish, sans-serif;
        font-size:1.5rem;
        font-weight:lighter;
        margin-right:1.5rem;
        img{
            margin:0 1rem;
        }
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
