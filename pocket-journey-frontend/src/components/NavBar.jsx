import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import {
  PersonIcon,
  RocketIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

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
            <Nav.Link href="#home" className="fw-bold">
              Pocket Journey
            </Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Global Community</Nav.Link>
            <NavDropdown title="Book" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Flights</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Trains</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hotels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Restaurants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Experiences
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto display-flex justify-content-evenly align-items-center gap-2">
            {" "}
            <Nav.Link href="#login">
              <PersonIcon /> Login
            </Nav.Link>
            <Nav.Link href="#register">
              <RocketIcon /> Register
            </Nav.Link>
            <button className="border border-none rounded bg-light">
              <SunIcon />
            </button>
            <button className="border border-none rounded bg-light">
              <MoonIcon />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
