import { useContext } from "react";
import {PokemonContex} from "../../store/pokemon-contex"
import { ErrorContainer } from "./styles";

function ErrorMessage (){
    const errorCtx = useContext(PokemonContex)
    const {error} = errorCtx

    return (
        <ErrorContainer>
            <p>{error}</p>
        </ErrorContainer>
    )

}

export default ErrorMessage