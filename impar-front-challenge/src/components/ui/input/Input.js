import { InputContainer } from "./styles"

function Input(props){
    return (
        <InputContainer>
            <input {...props}/>
        </InputContainer>
    )

}

export default Input