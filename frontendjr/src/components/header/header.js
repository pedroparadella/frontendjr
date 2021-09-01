import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css'









function Header({handleChange}) {



  return (
    <Navbar className="nav" style={{ height: "200px" }}>

      <Navbar.Collapse className="justify-content-end" >

        <div class="container-fluid" >
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Digite aqui a sua busca..." onChange={(e) => handleChange( e.target.value)
            } aria-label="Search" style={{ height: " 50px", width: "60%", marginLeft: "300px" }} />


            {/* <button class="btn btn-outline-success" type="submit"  onClick={(event) => setBusca (event.target.value)}>Search</button> */}
          </form>
        </div>

      </Navbar.Collapse>
    </Navbar>
  )
}




export default Header;