import { useNewCardContext } from '../../hooks/useNewCard';
import { CardItem } from '../CardItem'
import { Container } from './styles';


export function CardList() {
    const {cardItems, cardFiltered} = useNewCardContext()

    
  
    var controlView =[]
    if(cardFiltered.length > 0){
        controlView = cardFiltered
    }else{
        controlView = cardItems
    }

    return (
        <Container>
           {controlView.map((item) => {
                return <CardItem key={item.id} text={item.text} />
            })}
        </Container>
    );
}

