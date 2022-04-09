import logo from './logo.svg';
import Header from './components/Header';
import Card from './components/Card';
import Users from './db/users.json'
import { useState } from 'react';

function App() {


  const [users, setUsers] = useState(Users)

  const popularLista = () => {
    setUsers(Users)
  }

  const changeUsers = (event) => {
    popularLista()

    setUsers((u) => {
      return u.filter(user => user.nome.includes(event.target.value))
    })
  }

  const mostrarAlert = () => {
    alert('Funcionalidade não implementada')
  }

  return (
    <div className="App container">
      <Header></Header>

      <div class="columns is-centered">
        <input class="input column is-9" type="text" onChange={changeUsers} placeholder="Entre com o nome" />
         
        <button id='button-add' onClick={mostrarAlert} class="button column is-1 has-text-centered is-paddingless is-success is-outlined">Adicionar</button>
      </div>

      <h2 class="subtitle is-3">Resultado de busca</h2>


      <div class="columns is-multiline">
        {users.map((user) => {
          return (
            <div class="column is-3" >
              <Card userP={user}></Card>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
