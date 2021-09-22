import React, { useRef, useState, useEffect }  from "react";
import styled from "styled-components";
import SearchInputField from "./../SearchInputField";
import Button from "../Button";
import ResultContainer from "../ResultContainer";
import newCardIcon from './../../icons/icone_criar.svg';
import { PokemonService } from "../../services/pokemonService";
import { DeleteModal } from "../modals/DeleteModal";
import HSeparator from "../HSeparator";

const Container = styled.div`
    margin-top: 147px;;
    margin-bottom: 153px;
    width: 1056px;
`; 

const Row = styled.div`
    display: flex;
    margin-top: 59px;
    justify-content: space-between;
    width:100%;
`;


const Label = styled.p`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--cor-primaria);
    text-align: left;
`;


const SideNav = styled.div`
  display: flex;
  justify-content: end;
  align-items: stretch;
  height: 100%; 
  width: 100vw; 
  position: fixed;
  z-index: 2; 
  top: 0; 
  left: 100%;
  background-color: #F6F4F6CC;
  overflow-x: hidden;
  transition: 0.5s;
  font-family: 'Muli';
`;

const SideNavContent = styled.div`
  width: 44.6vw;
  height: 100%;
  background-color: var(--cor-branco);
  padding: 41px 34px 235px 32px;
`;

// const HBar  = styled.div`
//   height: 1px;
//   width: 100%;
//   background-color: #D4D4D4;
// `;

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-size: 16px;
  font-family: Muri;
  font-weight: semibold;

  & button {
    border: none;
    border-radius: 8px;
    width: 30px;
    height: 25px;
    cursor: pointer;
  }

  & button + span {
    margin-left: 10px;
    margin-right: 10px;
  }

`;


export default function Form(props) {
  const sideNav = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [storePokemon, setStorePokemon] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelectedFile, setIsSelectedFile] = useState(false);
  const service = new PokemonService();

  function loadPokemonList() {
    setIsLoading(true);
    if (searchValue) {
      service.searchPokemon(searchValue).then(response => {
        setPokemonList(response || []);
        setIsLoading(false);
    });
    } else {
      service.getAllPokemons(offset).then(response => {
        setPokemonList(response || []);
        setIsLoading(false);
      });
    }
  }

  useEffect(() => {
    loadPokemonList();
  }, [offset]);

  function deletePokemon(pokemon) {
    service.deletePokemon(pokemon.id).then(response => {
      loadPokemonList();
    });
    setShowModal(false);
  }

  function openModal(pokemon) {
    setShowModal(true);
    setSelectedPokemon(pokemon);
  }



  function toggleSideNav(){
    sideNav.current.style.left = isOpen ?  "100%" : 0;
    setIsOpen(!isOpen);
  }



  function handleFileImage(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    setSelectedFile(file);
    reader.onload = () => {
      setIsSelectedFile(true)
      setStorePokemon({
        ...storePokemon,
        //stores as base64
        imageUrl: reader.result
      });
    };
  }

  function handleSave(){
    toggleSideNav()
    setSelectedFile(null);
    setIsSelectedFile(false);
    setStorePokemon(null);
    service.addPokemon(storePokemon).then(response => {
      loadPokemonList();
    });
  }

  return (
    <Container>
      <DeleteModal show={showModal} onClose={() => setShowModal(false)} onDelete={() => deletePokemon(selectedPokemon)}/>
          <SearchInputField  onSearch={e => loadPokemonList()} onChange={e => setSearchValue(e.target.value)} />
          <Row>
              <Label>
                Resultado de Busca
              </Label>
              <Button onClick={toggleSideNav}>Novo Card</Button>
          </Row>
          <PaginationContainer>
            <button onClick={() => offset >=1 && setOffset(offset-1) }>{'<'}</button>
            <span>
              {offset+1}
            </span>
            <button onClick={() => offset<service.count && setOffset(offset+1)}> {'>'}</button>
          </PaginationContainer>
          <ResultContainer isLoading={isLoading} onDelete={e => openModal(e)} list={pokemonList}/>
          <SideNav ref={sideNav} onClick={toggleSideNav}>
          <SideNavContent onClick={e => e.stopPropagation()}>
              <div style={{display: 'flex'}}>
                <img style={{width: '46px', height: '46px', marginRight: '18px'}} src={newCardIcon} />
                <h1 className="-titulo-h1" >Criar card</h1>
              </div>
              <HSeparator style={{marginTop: 30.71}} />
              <h2 style={{marginTop: 43.29, fontSize: 14, fontWeight: 'bold', }}>DIGITE UM NOME PARA O CARD</h2>
              <input onChange={e => setStorePokemon(p => ({...p, name: e.target.value}))} style={{marginTop: 12.78, backgroundColor: 'var(--cor-branco)' , width: "100%", border: '1px solid #B9B9B9', borderRadius:'8px', outline:"none", padding: '18px 0 19px 25px'}} type="text" name="" id="" placeholder="Digite o título"/>
              <h2 style={{marginTop: 43.29, fontSize: 14}}>INCLUA UMA IMAGEM PARA APARECER NO CARD</h2>
              <div style={{display: 'flex', marginTop: 12.78, justifyContent:"space-between", width: "100%", border: '1px solid #B9B9B9', borderRadius:'8px', outline:"none", padding: ''}}>
                <span style={{margin: '18px 0 19px 25px' }}>
                  {isSelectedFile ? selectedFile.name : 'Nenhum arquivo selecionado'}
                </span>
                <div style={{display: "flex", alignItems:"center", padding:"12px 42px 13px 40px", marginRight: 8, height: 48,marginTop: 6.22, backgroundColor: "var(--cor-branco)", border: '1px solid var(--cor-destaque)', boxShadow: '0px 3px 6px #E763162E', borderRadius: 8}}>
                  <label style={{verticalAlign:"middle", fontSize: 18, fontWeight: 'bold', color: "var(--cor-destaque)"}} htmlFor="files">Escolher arquivo</label>
                  <input onChange={handleFileImage} accept=".png" type="file" id="files" style={{"display": "none"}}/>
                </div>
              </div>
              <HSeparator style={{marginTop: 51.22}} />
              <div style={{display: 'flex', justifyContent:"end"}}>
                <Button onClick={handleSave} style={{marginTop: 26}}>Criar card</Button>
              </div>
          </SideNavContent>
          </SideNav>
    </Container>
  )
}
