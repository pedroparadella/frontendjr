import { useEffect, useState } from 'react'
import api from '../../services/api'

import {
    ContainerModal,
    Modal,
    Sprite,
    Name,
    InfoPokemon,
    ButtonModal,
    ContainerButton
} from './style'

const ModalPoke = ({show, pokemonSelect,delpoke})=> {
    const [infoPokemon,setInfoPokemon] = useState([])
    useEffect(() =>{
            api.get(`/${show}`).then(response =>{
                setInfoPokemon([response.data ])
            }).catch(error =>{
               
            })
    },[show])
    return(
        <>
            {infoPokemon.map((object) =>{
                return(
                    <ContainerModal key={object.name} className={show ? 'ContainerModal active' : ContainerModal}>
                    <Modal>
                        <InfoPokemon>
                            <Sprite src={object.sprites.other.home.front_default}></Sprite>
                            <Name>{object.name}</Name>
                        </InfoPokemon>
                        <ContainerButton>
                            <ButtonModal color={"btn_danger"} onClick={delpoke}>Excluir</ButtonModal>
                            <ButtonModal color={"btn_danger_outline"}onClick={pokemonSelect}>Cancelar</ButtonModal>
                        </ContainerButton>      
                    </Modal>
                    </ContainerModal>
                )
            })}
            
            </>
    )
}
export default ModalPoke