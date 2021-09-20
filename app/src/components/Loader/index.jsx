import styled, {keyframes} from "styled-components";

const rotate  = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Loader = styled.div`
    --loader-color:  ${props => props.color ||  '#da552f'};
    --loader-size: ${props => props.size || '8rem'};
    --loader-width: ${props => props.width || '12px'};
    --loader-duration: ${props => props.duration || '2s'};
    z-index: 9999;
    width: var(--loader-size);
    height: var(--loader-size);
    position: absolute;
    top: 80%;
    left: 45%;
    border: var(--loader-width) solid #f3f3f3;
    border-top: var(--loader-width) solid var(--loader-color);
    border-radius: 50%;
    animation: ${rotate} var(--loader-duration) linear infinite;
    display: ${props => props.isLoading ? 'block': 'none'};
`;


export {Loader};