
import { useEffect, useState } from "react";
import { ContainerCard } from "../ContainerCard";
import { ContainerOn, ContainerOff } from "./styles";

export function CreateCard(props) {
    const [change, setChange] = useState(false)
    const { showCard, CloseInsertCard, notify} = props
    
    useEffect(() => {
        setChange(showCard)
    }, [showCard])
    return (
        <>
            {change ? (<ContainerOn>
                <ContainerCard 
                    CloseInsertCard={CloseInsertCard} 
                    notify={notify}
                />
            </ContainerOn>) :

                (<ContainerOff>
                    <ContainerCard 
                        CloseInsertCard={CloseInsertCard} 
                        notify={notify}
                    />
                </ContainerOff>)
            }
        </>
    )
}