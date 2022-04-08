
import { useEffect, useState } from "react";
import { ContainerCard } from "../ContainerCard";
import { ContainerOn, ContainerOff } from "./styles";

export function CreateCard(props){
    const [change, setChange] = useState(false)
    const {showCard, CloseInsertCard} = props


    useEffect(() =>{
        setChange(showCard)
    },[showCard])
    return(
        <>
            {change ? (<ContainerOn>
                            <ContainerCard CloseInsertCard={CloseInsertCard}/>
                       </ContainerOn>) :
                       
                       (<ContainerOff>
                           <ContainerCard CloseInsertCard={CloseInsertCard}/>
                       </ContainerOff>)
            }
        </>
    )
}