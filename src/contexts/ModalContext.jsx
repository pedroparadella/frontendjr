import { createContext, useState } from "react";

const ModalContext = createContext(); 

//Used to make the modal show and hide

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState("close");
    

    const handleModal = (e) => {
        const id = e.target.id; 
        setModal(id);

    }

    
    return (
        <ModalContext.Provider value={{ modal, handleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;