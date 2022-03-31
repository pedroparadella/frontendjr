import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface CardListProps {
    id: number;
    text: string;
    svg: string;
    selectedFile?: boolean
}
interface CardProps {
    children: ReactNode;
}

type cardInput = Pick<CardListProps, 'text' | 'selectedFile'>

interface CardContextData {
    cardItems: CardListProps[];
    cardFiltered: CardListProps[];
    createCard: (card: cardInput) => Promise<void>;
    showFilteredCard: (text: string) => void;

}
const CardContext = createContext<CardContextData>(
    {} as CardContextData
);

export function CardProvider({ children }: CardProps) {
    const [cardItems, setCardItems] = useState<CardListProps[]>([]);
    const [cardFiltered, setCardFiltered] = useState<CardListProps[]>([]);

    useEffect(() => {
        api.get('/cardlist')
            .then(response => setCardItems(response.data.newCards))
    }, []);

    async function createCard(insertingCard: cardInput) {
        const response = await api.post('/cardlist', insertingCard)
        const { newCard } = response.data;
        setCardItems([...cardItems, newCard]);
    }

    function showFilteredCard(text: string): void {

        const cardFiltered = cardItems.filter(item => item.text.includes(text))
      
        if(text.length === 0){
            setCardItems(cardItems)
            setCardFiltered([])

        }if(text.length > 0){
            setCardFiltered(cardFiltered)
        }
            

    }


    return (
        <CardContext.Provider value={{ cardItems, cardFiltered, createCard, showFilteredCard }}>
            {children}
        </CardContext.Provider>
    )


}

export function useNewCardContext() {

    const context = useContext(CardContext);

    return context;
}




