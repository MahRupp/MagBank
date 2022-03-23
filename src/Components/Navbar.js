import React from "react";
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import './Navbar.scss';
import logo from "../Assets/logo.svg"

const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand>
      <Link to="/">
        <img
          src= {logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#cartão">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
            <Nav.Link as={Link} to="/login">Pessoa física</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link as={Link} to="/login">Pessoa jurídica</Nav.Link>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
   </Navbar>
);

export default Navigation;
