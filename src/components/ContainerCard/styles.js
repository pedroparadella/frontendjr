import styled from "styled-components";

export const Container = styled.main`
    background: var(--white-color);
    width: min(100%, 40rem);
    height: 100vh;
    padding: 2.8rem 2rem;

    div{
        display: flex;
        align-items: center;

        img {
            margin-bottom: .375rem;
            margin-right: 1.125rem;
        }
        h2{
            font-size: 2rem;
            color: var(--primary-color);
        }
    }
    button.close{
        width: 1rem;
        height: 1rem;
        box-shadow: none;
        background: transparent;
        float: right;
        border: none;
    }
    button.create-card{
        width: 10.5rem;
        height: 3rem;
        color: var(--white-color);
        background: var(--highlight-color);
        border-radius: 8px;
        border: none;
        box-shadow: 0px 3px 6px rgba(146, 32, 114, 0.26);
        float: right;
        font-size: 1.125rem;
        font-weight: 600;
    }
`
export const Line = styled.div`
    width: min(100%,35.75rem);
    border: 1px solid #d4d4d4;
    margin: 2rem 0;
`
export const ContainerInput = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label{
        font-size: .875rem;
        color: var(--text-color);
        font-weight: 600;
        margin-bottom: .75rem;
    }
    input[type="text"]{
       
        width: min(100%, 36rem);
        height: 3.75rem;
        border: 1px solid #B9B9B9;
        border-radius: .5rem ;
        margin-bottom: 3.125rem;
        padding-left: 1.5rem;
        font-size: 1.125rem;
        color: var(--text-color);
    }
    .send-image{
        position: relative;
        width: 100%;
        label{
            position: absolute;
            right: .5rem;
            top: .4rem;
            width: min(100%,14rem);
            height: 3rem;
            background: var(--white-color);
            color: var(--highlight-color);
            border: 1px solid var(--highlight-color);
            box-shadow: 0px 3px 6px rgba(231, 99, 22, 0.18);
            border-radius: .5rem;
            text-align: center;
            line-height: 3rem;
            display: block;
            cursor: pointer;
        }
        input[type="file"]{
            display: none;
        }

    }

`