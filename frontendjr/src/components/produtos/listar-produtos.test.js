import React from 'react';
import {getByText, render} from '@testing-library/react';
import ListarProdutos from './listar-produtos'

describe('Teste do componente de listagem de produtos', () => {
it('deve exibir os nomes dos produtos no card', () => {
    const {getByTextId} = render (
        <ListarProdutos
        adicionarProduto={() => false } 
        exibirMensagem={() => false} />
    );
    expect (getByTextId('card')).toHaveTextContent("HAAR INTERN C/60CPR-S/AC");
    expect (getByTextId('card')).toHaveTextContent("PROTEIN CRISP BAR 12U-CHURROS/DOCE LEITE");
});

});