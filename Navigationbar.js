import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LoginControl from "../component/LoginControl";
import "./NavMenu.css";

const Styles = styled.div`
  .navbar {
    background-color: lightblue;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: black;
    &:hover {
      color: blue;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div>
          <h1>Crud App</h1>
        </div>
        <Nav className="ml-auto">
          <Nav.Item className="mt-2">
            <LoginControl />
          </Nav.Item>
          {/* <Nav.Item><Nav.Link href="/colors">Colors</Nav.Link></Nav.Item>  */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default Navigationbar;
