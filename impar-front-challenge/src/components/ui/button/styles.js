import styled from "styled-components";

const bgColor = (props) => {
    if(props.bgColor === "orange"){
        return "rgb(255, 106, 0)"
    }
    if(props.custom){
        return "rgb(242, 242, 242)"
    }

    if(props.bgColor === "red"){
        return "red"
    }
    
    return "white"
}

export const ButtonContainer = styled.button`
    
    padding: ${props => props.custom  ? "none" : "0.6rem 1.2rem"};
    border: ${props => props.border};
    border-radius: 5px;
    background-color: ${bgColor};
    color:  ${props => props.custom ? "gray" : props.color ? props.color : "white"};
    font-weight: bold;
    box-shadow: ${props => props.custom ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    transition: all ease-in-out 0.4s;

    &:hover{
        ${props => props.custom ? "color: red; cursor: pointer" : "none"};
    } 
`;


