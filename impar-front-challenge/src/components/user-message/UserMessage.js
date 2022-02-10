import Card from "../ui/card/Card"
import {UserMessageContainer} from "./styles"
import Button from "../ui/button/Button"

function UserMessage(props){
    return(
        <Card>
            <UserMessageContainer>
                <p>Sorry, create card button is not working at the moment!</p>
                <Button border = "none" bgColor = "orange" onClick = {props.onHandleModal} >Ok!</Button>
            </UserMessageContainer>
        </Card>
    )
}

export default UserMessage