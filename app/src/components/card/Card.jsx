import React from 'react';

import { 
    ButtonSeparationVerticalLine,
    CardData,
    CardFooter,
    CardImage,
    CardImageBox,
    DeleteButton,
    DeleteIcon,
    EditButton,
    EditIcon,
    Name,
    Wrapper,
} from './style';

const Card = props => {
    const {data, handleDeleteVisibility,  handleEdit} = props;
    return (
    <Wrapper>
        <CardImageBox>
            <CardImage src={(data !== null && data.sprites.front_default) ? data.sprites.front_default  : '' }/>
        </CardImageBox>
        <CardData>
            <Name>{data !== null ? data.name : "" }</Name>
        </CardData>
        <CardFooter>
            <DeleteButton id='deleteButton' onClick={handleDeleteVisibility}><DeleteIcon/><span>Excluir</span></DeleteButton>
            <ButtonSeparationVerticalLine/>
            <EditButton onClick={handleEdit} id='cancelButton'><EditIcon/><span>Editar</span></EditButton>
        </CardFooter>
    </Wrapper>
    )
}

export default Card;