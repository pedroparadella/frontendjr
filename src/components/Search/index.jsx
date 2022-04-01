import { useEffect, useState } from 'react';
import { Container, Text, ButtonCard, WrapperContainer } from './style'
import iconTrash from "../../assets/icon-trash.png"
import iconEdit from "../../assets/icon-edit.png"
import { ModalExclude } from "../Modals/modalExclude"
import {Modals} from "../Modals/modal"
import axios from 'axios';
export function Search({ placeholder }) {
    
  const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    function handleOpen() {
        setModalOpen(true)
    }
    function abrindoModal() {
        setModalIsOpen(true)
    }
    function exibirAlert() {
        alert("funcionalidade não implementada")
    }
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([])
    const [searchInput, setSearchInput] = useState('')
    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
                setAPIData(response.data.results);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData =
                APIData.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
                })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(APIData)
        }
    }
    return (
        <Container>
            <div className='imageContainer'>

                <div className="fundo"></div>
                <input type="text" onChange={(e) => searchItems(e.target.value)} placeholder={placeholder} />
                <button className="button" type="submit" ></button>
            </div>
            <div className="teste">
                <Text>
                    <h1>Resultado de busca</h1>
                </Text>
                <ButtonCard>
                    {modalIsOpen && <Modals />}
                    <a href="#" className="newCard" onClick={abrindoModal}>Novo Card</a>
                </ButtonCard>
                <WrapperContainer>
                    {searchInput.length > 1 ? (
                        filteredResults.map((item) => {
                            const id = item.url;
                            const URL = id.split("/");
                            const UrlID = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${URL[6]}.png`;
                            return (
                                < >
                                    <section>
                                        <div className="search">
                                            <div className="searchInputs">

                                                <div className="description" key={item.id}>
                                                    <h1>
                                                        {item.name}
                                                    </h1>
                                                    <div className="image">
                                                        <img src={UrlID} alt="" />
                                                    </div>
                                                    <div className="mudancas">
                                                        <button className="exclude" onClick={handleOpen}><img src={iconTrash} alt="Lixeira" /> Excluir</button>
                                                        <button className="edit" onClick={exibirAlert}><img src={iconEdit} alt="Editar" /> Editar</button>
                                                    </div>
                                                    {modalOpen && <ModalExclude closeModal={setModalOpen} />}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            )
                        })) : (
                        APIData.map((item) => {
                            const id = item.url;
                            const URL = id.split("/");
                            const UrlID = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${URL[6]}.png`;
                            const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.name}.png`
                            return (
                                < >
                                    <section>
                                        <div className="search">
                                            <div className="searchInputs">

                                                <div className="description" key={item.id}>
                                                    <h1>
                                                        {item.name}
                                                    </h1>
                                                    <div className="image">
                                                        <img src={UrlID} alt="" />
                                                    </div>
                                                    <div className="mudancas">
                                                        <button className="exclude" onClick={handleOpen}><img src={iconTrash} alt="Lixeira" /> Excluir</button>
                                                        <button className="edit" onClick={exibirAlert}><img src={iconEdit} alt="Editar" /> Editar</button>
                                                    </div>
                                                    {modalOpen && <ModalExclude closeModal={setModalOpen} />}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            )
                        })
                    )}
                </WrapperContainer>
            </div>
        </Container>
    )
}