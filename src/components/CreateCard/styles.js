import styled from 'styled-components'

export const ContainerOn = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background:  rgba(246, 244, 246, 0.8);
    z-index: 1;
    transition: all .5s ease-in-out;

`
export const ContainerOff = styled.div`
     display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: -9999px;
    width: 100%;
    height: 100vh;
    background:  rgba(246, 244, 246, 0.8);
    z-index: 1;
    transition: all .5s ease-in-out;

`
// .container-on{
//     display: flex;
//     justify-content: flex-end;
//     position: fixed;
//     top: 0;
//     right: 0;
//     width: 100%;
//     height: 100vh;
//     background:  rgba(246, 244, 246, 0.8);
//     z-index: 1;
//     transition: all .5s ease-in-out;
// }
// .container-off{
//     display: flex;
//     justify-content: flex-end;
//     position: fixed;
//     top: 0;
//     right: -9999px;
//     width: 100%;
//     height: 100vh;
//     background:  rgba(246, 244, 246, 0.8);
//     z-index: 1;
//     transition: all .5s ease-in-out;
// }