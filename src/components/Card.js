import { useImperativeHandle } from "react/cjs/react.production.min";




function Card({ userP }) {


    const mostrarAlert = () => {
        alert('Funcionalidade não implementada')
    }

    return (

        <div class="card card-color-secondary" >
            <header class="card-header">
                <p class="card-header-title">
                    {userP.nome}

                </p>
                <button class="card-header-icon" aria-label="more options">
                </button>
            </header>
            <div class="card-content">
                <div class="content has-text-left">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src={userP.foto} />
                    </figure>
                    <hr/>

                    Idade : {userP.idade}
                    <br />
                    Bairro :  {userP.bairro}
                    <br />

                </div>
            </div>
            <footer class="card-footer">
                <button className="card-footer-item button is-light " onClick={mostrarAlert}>Edit</button>
                <button className="card-footer-item button is-danger" onClick={mostrarAlert}>Delete</button>
            </footer>
        </div>
    );
}

export default Card;
