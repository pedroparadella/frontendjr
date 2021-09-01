import React from 'react';
// import placeholder from '../../imagens/286x180.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons';




function ListarProdutos(props){

    const produtos = [
        {
            "id": "5fa2999664313a3718a1e0d5",
            "sku": "P00033914", 
            "name": "HAAR INTERN C/60CPR-S/AC",
            "barcode": "7896202500058",
            "maker": "VITAMED",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "VITAMINA B7 (BIOTINA)",
            "base": "Nexfar",
                "preco": 'R$ 16,92',
            "quantity": 1,
            "quantityAvailable": 99,
            "validUntil": 1667228400000,
            "imageURL": "https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg"
        },
        {
            "id": "5f77967fc3037641653d4ee8",
            "sku": "P00033824",
            "name": "PROTEIN CRISP BAR 12U-CHURROS/DOCE LEITE",
            "barcode": "7896311769070",
            "maker": "INTEGRALMEDICA",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "WHEY PROTEIN",
            "base": "Nexfar",
                "preco": 'R$ 45,79',
              
            "quantity": 1,
            "quantityAvailable": 0,
            "validUntil": 1635692400000,
            "imageURL": "https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg"
        },
        {
            "id": "5f6ca7c9da9a7566bdb84833",
            "sku": "P00033818",
            "name": "AGUA MICELAR ROSA MOSQUETA IONS DERMACHEM 250ML",
            "barcode": "7908346900653",
            "maker": "PROLINK",
            "category": "COSMÉTICOS",
            "principle": "ACIDO HIALURONICO+ASSOCIACOES",
            "base": "Nexfar",
                "preco": 'R$ 9,99',
          
            "quantity": 1,
            "quantityAvailable": 53,
            "validUntil": 1664550000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/23/5f92da028cb461489e72b3b6.png"
        },
        {
            "id": "5f620dc2adb11968f9db8739",
            "sku": "P00033801",
            "name": "EXTRATO PROPOLIS C/30CPS",
            "barcode": "7899620914582",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "EXTRATO DE PROPOLIS",
            "base": "Nexfar",
                "preco": 'R$ 16,28',
       
            "quantity": 1,
            "quantityAvailable": 1211,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/9/5fa98aed980a47297e4b867a.png"
        },
        {
            "id": "5f5a40f6adb11968f9db28cd",
            "sku": "P00033799",
            "name": "ZINCO 29,59MG C/60CPR REV",
            "barcode": "7899620914674",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 12,99',
     
            "quantity": 1,
            "quantityAvailable": 1143,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/9/17/5f63cbdcb414ad2ee408573f.png"
        },
        {
            "id": "5f5a40f6adb11968f9db28cc",
            "sku": "P00033798",
            "name": "ZINCO 29,59MG C/30CPR REV",
            "barcode": "7899620914667",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 6,56',
          
            "quantity": 1,
            "quantityAvailable": 1026,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/9/17/5f63cbc88fd2e05df4c85dd4.png"
        },
        
    ];
    function handleExcluir (event, produto){
        event.preventDefault();
        props.exibirMensagem(produto);      
        
    }

    function handleEditar (event, produto){
        event.preventDefault();
        props.exibirMensagem(produto);      
        
    }
    function render() {
        let key = 1;
        const cards = produtos.filter(produto=>produto.name?.toLowerCase().indexOf(props.busca.toLowerCase())!==-1).map(produto =>
        <Card 
        Key={key}
        data-testId={'card' + key++}
            style={{ width: '18rem', margin: '10px', float: 'left' }}>
                <Card.Img variant="top" src={produto.imageURL} style = {{height:'300px'}}/>
                <Card.Body className="text-center">
                <Card.Title style = {{ height: '40px'}}>
                   {produto.name}
                </Card.Title>
                <Button

                    title={
                    <div style={{ display: 'inline-block' }}>
                    <FontAwesomeIcon icon={faTrash} />
                    </div>
                }
                drop="right"
                
                variant="light"
                 style={{width:'30%', height:'30px'}}
                onClick={(event) => handleExcluir (event, produto)}>
                    Excluir
                    </Button>

                    <Button
                variant="light"
                style={{width:'30%', height:'30px'}}
                onClick={(event) => handleEditar (event, produto)}>
                    Editar ({})
                    </Button>
                </Card.Body>

                
                </Card>
        );
        return cards;
    }

    return render();
}


export default ListarProdutos; 