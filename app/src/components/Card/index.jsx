import styled from "styled-components";
import icone from "./../../icons/icone.svg";
import trashIcon from "./../../icons/Icon-trash.svg";
import editIcon from "./../../icons/Icon-edit.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: var(--cor-branco);
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    width: 234px;
`;

const Circle = styled.div`
    width: 5.938rem;
    height: 5.938rem;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
    background-color: #F6F4F6;
    display: grid;
    place-items: center;
    margin: 1.75rem 4.375rem 0 4.375rem; 
`;

const HBar = styled.div`
    width: 72%;
    height: 1px;
    background-color: #F0EFF0;
    margin-top: 1.375rem;
`;

const VBar = styled.div`
    border: 1px solid #F6F4F6;
    width: 0;
    height: 22.27px;
    margin-left: 10.22px;
`;


const Text = styled.p`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-20) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-263238);
    margin: 10.11px 22px 0 21px;
    text-align: center;
`;



const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top: 13px;
    width: 100%;
    height: 43px;
    margin-top: 1.801rem;
    background-color: var(--cor-branco);
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
`;

const CardButton = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: middle !important;
    width: 72.4px;
    height: 30px;
    text-align: center;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/19px var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);

    &.delete-btn {
        margin-left: 27.6px;
    }

    &.edit-btn {
        margin-right: 32.28px;
    }
    
    
    & span {
        color: var(--unnamed-color-263238);
        opacity: 0.52;
    } 

    
    &.btn:hover, &.btn:hover span {
        cursor: pointer;
        opacity: 1;
    }

    &.edit-btn:hover, &.edit-btn:hover span {
        color: var(--cor-destaque);
    }

    &.delete-btn:hover, &.delete-btn:hover span {
        color: var(--cor-erro);
    }
`;


const EditButton =  ({children, onClick}) => (
    <CardButton onClick={e => onClick(e)} className="edit-btn btn">
        <img style={{marginRight: 9.5, float: 'left',  marginTop: 2.46, marginBottom: 3.32}} width={12.64} height={14.05} src={editIcon} />
        <span>{children}</span>
    </CardButton>
);


const DeleteButton = ({children, onClick}) => (
    <CardButton onClick={e => onClick(e)} className="delete-btn btn">
        <img style={{marginRight: 11.75, float: 'left', marginTop: 1.87, marginBottom: 3.08}} width={12.64} height={14.05} src={trashIcon} />
        <span>{children}</span>
    </CardButton>
);

export default function Card({item,onDelete,onEdit}) {

    return (
        <Container>
            <Circle>
                <img width={64} height={63} src={item.image} alt="icone" />
            </Circle>
            <HBar />
            <Text>
                {item.name}
            </Text>
            <ButtonsContainer>
                <DeleteButton onClick={e => onDelete(item)} > Excluir </DeleteButton>
                <VBar />
                <EditButton onClick={d => onEdit(d)}> Editar </EditButton>
            </ButtonsContainer>
        </Container>
    );
}