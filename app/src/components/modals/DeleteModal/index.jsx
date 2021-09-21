import styled from "styled-components";
import HSeparator from "../../HSeparator";
import trashIcon from '../../../icons/Icon-trash.svg';

const Modal = styled.div`
    --modal-width: 438px;
    --modal-height: 434px;  
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: calc(50% - var(--modal-height) / 2);
    left: calc(50% - var(--modal-width) / 2);
    width: var(--modal-width);
    height: var(--modal-height);
    background-color: var(--cor-branco);
    z-index: 5;
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: #F6F4F6CC;
    z-index: 4;
    font-family: Muli;
`;


const Circle = styled.div`
    width: 159px;
    height: 159px;
    border-radius: 50%;
    border: 6px solid #E4E4E4;
    background-color: #DB25250F ;
    display: grid;
    place-items: center;
    margin-top: 50px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 8px;
    border-style: ${props => props.inverted ? 'solid' : 'none'};
    box-shadow: 0px 3px 6px #92207242;
    background-color: ${props => !props.inverted ? 'var(--cor-erro)' : 'var(--cor-branco)'};
    border-color: ${props => props.inverted ? 'var(--cor-erro)' : 'none'};
    color: ${props => !props.inverted ? 'var(--cor-branco)' : 'var(--cor-erro)'};
    padding: 12px 13px;
    min-width: 158px;
    font-size: 18px;
    font-weihgt: bold;
    cursor: pointer;

`;

const CircleX = styled.div`
    width: 34px;
    height: 34px;
    background-color: var(--cor-destaque);
    border-radius: 50%;
    position:relative;
    top: -17px;
    left: 50%;
    cursor: pointer;

    &::before{
        content: '';
        position: absolute;
        top: 45%;
        left: 20%;
        width: 21px;
        height: 2px;
        transform: rotate(45deg);
        background-color: var(--cor-branco);
    }

    &::after{
        content: '';
        position: absolute;
        top: 45%;
        left: 20%;
        width: 21px;
        height: 2px;
        transform: rotate(-45deg);
        background-color: var(--cor-branco);
    }
`;





const DeleteModal = ({show, onClose,onDelete}) => {
    if(show){
        return (
        <Container  onClick={e => onClose(e)}>
            <Modal onClick={e => e.stopPropagation()}>
                <CircleX onClick={onClose}/> 
                <Circle >
                    <img src={trashIcon} width={68} height={68} alt=""/>
                </Circle>
                <span style={{fontWeight: 'bold', fontSize: 32, textAlign: 'center', color: 'var(--cor-erro)'}}>
                    Excluir
                </span>
                <span style={{marginTop: 13, fontSize: 12, fontWeight:'bold', color: 'var(--cor-texto)', textAlign:'left', textTransform: 'uppercase',}}>
                    certeza que deseja excluir?
                </span>
                <HSeparator style={{width: 364, marginTop: 28.11}} />
                <div style={{marginTop: 10.89, display: 'flex', justifyContent:"space-between"}}>
                    <Button style={{marginRight: 17}} onClick={onDelete}>
                        <span>
                            Excluir
                        </span>
                    </Button>
                    <Button inverted onClick={onClose}>
                        <span>
                            Cancelar
                        </span>
                    </Button>
                </div>
            </Modal>
        </Container>
        )
    }else {
        return null;
    }
}



export {DeleteModal};
