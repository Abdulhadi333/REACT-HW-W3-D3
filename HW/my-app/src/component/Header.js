import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav,Container  } from 'react-bootstrap';


function Header() {
  return (

    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/home">Home</Nav.Link>
    
    <Link to="/Cards">Cards</Link>
    <Link to="/About">About</Link>
    
    </Nav>
    </Container>
  </Navbar>
 

  
</>
    // <div>
    //   <Link to="/Cards">Cards</Link>

    //   <Link to="/About">About</Link>
    // </div>
  );
}

export default Header;