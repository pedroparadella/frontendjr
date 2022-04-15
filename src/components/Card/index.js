import icone_trash from "../../img/Icon-trash.svg";
import icone_edit from "../../img/Icon-edit.svg";
import Sidebar from "../sidebar";
import ModalTrash from "../Modal";

import { useEffect, useState } from "react";
import { Box, Img, Name, FooterBox, Type } from "./estilos";
import getPokemonData from "../../services/api";

export default function Card(props) {
  let filtro = props.data;
  let load = props.loadList;
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
  };
  if (load === true) {
    let arrayFiltrado = pokemon.filter((item) => {
      return item.data.name
        .toLocaleLowerCase()
        .includes(filtro.toLocaleLowerCase());
    });
    return (
      <>
        {arrayFiltrado.map((p) => (
          <Box>
            <Img className={p.data.types[0].type.name}>
              <img src={p.data.sprites.front_default} alt={p.data.name}></img>
            </Img>
            <Name>{p.data.name}</Name>
            <Type>{p.data.types[0].type.name}</Type>

            <FooterBox>
              <div>
                <img src={icone_trash} alt="Ícone de lixo"></img>
                <button onClick={() => setShowModal(true)}>Excluir</button>
              </div>
              <div>
                <img src={icone_edit} alt="Ícone para editar"></img>
                <button onClick={() => setShowSidebar(true)}>Editar</button>
              </div>
            </FooterBox>

            {showSidebar && (
              <Sidebar closeModal={() => setShowSidebar(false)} />
            )}
            {showModal && <ModalTrash closeModal={() => setShowModal(false)} />}
          </Box>
        ))}
      </>
    );
  }
}
