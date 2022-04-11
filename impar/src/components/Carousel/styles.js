import styled from "styled-components";

export const CarouselImg = styled.img `
    background-image: ${props => `url(${props.src})`};
    height: 100vh;
    margin-top: -5vh;
    width: 100vw;
`;