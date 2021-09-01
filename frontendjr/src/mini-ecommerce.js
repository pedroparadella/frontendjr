import React, { useState } from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Header from './components/header/header'

function MiniEcommerce() {

  const [carrinho, setCarrinho] = useState({ produtos: [] })
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirHeader, setExibirHeader] = useState(false);
  const [busca, setbusca] = useState('');
  
  return (
   <div>
     <Menu />
     <Header handleChange={setbusca} />
     <Produtos busca={busca}/>
     
   </div>
  );
}

export default MiniEcommerce;
