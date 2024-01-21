import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPen, faBagShopping } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="70"
            className="d-inline-block align-top me-0 rounded-4"
            alt="Pocket Journey Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0">
          <Nav.Link as={Link} to="/" className="fw-bold">
              Pocket Journey
            </Nav.Link>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/community">Global Community</Nav.Link>
            <NavDropdown title="Book" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/flights" >Flights</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trains">Trains</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hotels">Hotels</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/restaurants">
                Restaurants
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/experiences">
                Experiences
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto display-flex justify-content-evenly align-items-center gap-2">
            {" "}
            <Nav.Link as={Link} to="/cart"> {/* shopping cart */}
            <button className="border border-white rounded bg-white fs-4">
            <FontAwesomeIcon icon={faBagShopping} />
            </button>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button className="border border-white rounded bg-white fs-4"><FontAwesomeIcon icon={faUserPen } /> </button>
            </Nav.Link>
  
            <button className="border border-white rounded bg-white">
              
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
