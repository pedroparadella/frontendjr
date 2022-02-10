import { BackdropContainer } from "./styles"

function Backdrop(props){
    return(
        <BackdropContainer {...props}>
            {props.children}
        </BackdropContainer>
    )
}

export default Backdrop