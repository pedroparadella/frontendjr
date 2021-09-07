import React from 'react';
import { Header, Container } from './TopbarElements';
import { Link } from 'react-router-dom';
import logo from '../images/logo-teste.svg';

export default function Topbar() {
  return (
    <>
      <Header>
        <Container>
          <Link to="/" className="topbar-logo">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </Container>
      </Header>
    </>
  );
}
