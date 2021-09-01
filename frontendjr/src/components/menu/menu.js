import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './menu.css'



function Menu (){
    return (
        <Navbar className="bar" >
            <Navbar.Brand href="" style={{ color:" white" }}> <strong>Teste</strong> ímpar </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    {/* <NavDropdown
                    title={
                        <div style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            &nbsp;
                            Carrinho
                        </div>
                    }
                    drop="left">
                        
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Menu; 