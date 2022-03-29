import { createContext, useState } from "react";

const ModalContext = createContext(); 

//Used to make the modal show and hide

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false);
    const handleClick = () => {
        setModal(prevState => !prevState);
    }
    
    return (
        <ModalContext.Provider value={{modal, handleClick}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;