import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FaHome } from "react-icons/fa";
import { GiShinyApple } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GiLightBulb } from "react-icons/gi";
// import { GiOwl } from "react-icons/gi";
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from "react-bootstrap/Container";

// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();


  return (
    <Navbar bg="info" variant="light" sticky="top" className="shadow p-0 m-0 pt-2 pl-2 pb-1 mb-3">
      <Nav className="mr-auto">
      <Button variant="outline-light" onClick={() => history.push("/")} className="btn-lg mx-1 border-0 m-auto d-flex justify-content-center" style={{ width: '8rem', height: '3rem' }}><FaHome className="m-0 d-flex justify-content-center m-1" /> Home</Button>
      <Button variant="outline-light" onClick={() => history.push("/About")} className="btn-lg mx-1 d border-0 m-auto d-flex justify-content-center" style={{ width: '8rem', height: '3rem' }}><GiShinyApple className="m-0 d-flex justify-content-center m-1" /> About</Button>
      <Button variant="outline-light" onClick={() => history.goBack()} className="btn-lg mx-1 border-0 m-auto d-flex justify-content-center" style={{ width: '9rem', height: '3rem' }}><IoMdArrowRoundBack className="m-0 d-flex justify-content-center m-1" /> Go Back</Button>
      </Nav>
        <Navbar.Brand href="#home" cl className="p-1"><h1 className="p-1"><GiLightBulb />MIM</h1></Navbar.Brand>
    </Navbar>


/* <Jumbotron className="jumbo d-flex justify-content-center p-0 m-0" fluid>
<Container className="text d-flex justify-content-center p-0 m-0">
<img alt="" src="https://i.ibb.co/8gm06S5/logoname.png" style={{ width: '400px', height: '400px' }} ></img> */

/* <h1 className="p-1"><GiFairyWand />mim</h1> */
// </Container>
// </Jumbotron>
//  </div>
    
    );
  }
  

export default NavBar;
