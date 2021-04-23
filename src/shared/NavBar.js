import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "./images/plane-slash-solid.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="pich-logo" />
          Pich
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div className="navbar navbar-expand-md">
    //   <div className="container">
    //     <a href="index.html" className="navbar-brand logo-text">
    //       <img src={logo} alt="pich-logo" />
    //       Pitch
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarCollapse"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div id="navbarCollapse" className="collapse navbar-collapse">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a href="#home" className="nav-link">
    //             Home
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
