import React from "react";
import Trash from "../assets/trash.svg"
import Edit from "../assets/edit.svg"
import Swal from 'sweetalert2'

const Pokemon = (props) => {
    const { pokemon } = props;

    const mensagemOnClick = (e) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Esta funcionalidade <br> não foi implementada!'
          })
    }

    return (
        <div className="pokemonCards">
            <div className="pokemonImgContainer">
                <img src={pokemon.sprites.front_default} alt="{pokemon.name}"
                    className="pokemonImg" />
            </div>
            <div className="infoCards">
                <h2>{pokemon.name}</h2>
                #{pokemon.id}
            </div>
            <div className="buttonCards">
                <button onClick={mensagemOnClick} >
                    <img src={Trash} alt="deletar" />
                    <p>Excluir</p>
                </button>
                <button onClick={mensagemOnClick} >
                    <img src={Edit} alt="editar" />
                    <p>Editar</p>
                </button>
            </div>
        </div>
    )
}

export default Pokemon