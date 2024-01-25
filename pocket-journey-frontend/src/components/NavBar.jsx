import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserPen,
    faSuitcaseRolling,
    faPeopleRoof,
    faPlaneUp,
} from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"

function NavBar() {
    const location = useLocation()
    const [opacity, setOpacity] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const fiftyVhInPx = window.innerHeight * 0.5

            const shouldSetOpacity = window.scrollY < fiftyVhInPx
            setOpacity(!shouldSetOpacity)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Check if the current page is not the homepage
    const isNotHomePage = location.pathname !== "/"
    return (
        <Navbar
            expand="lg"
            className={`${isNotHomePage ? "" : "fixed-top"} ${
                opacity ? "classe-opacity" : ""
            }`}
            bg="dark"
            variant="light"
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    as={Link}
                    to="/"
                    className="fw-bold text-white mt-1"
                >
                    P
                    <img
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top me-0 rounded-4"
                        alt="Pocket Journey Logo"
                    />
                    cket Journey
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="justify-content-center gap-4"
                        style={{ flexGrow: 1 }}
                    >
                        <Nav.Link as={Link} to="/" className="text-white">
                            Home
                            <FontAwesomeIcon
                                icon={faPlaneUp}
                                className="ms-2 fs-5"
                            />
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/community"
                            className="text-white"
                        >
                            Global Community
                            <FontAwesomeIcon
                                icon={faPeopleRoof}
                                className="ms-2 fs-5"
                            />
                        </Nav.Link>
                        <NavDropdown
                            title={<span style={{ color: "white" }}>Book</span>}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/flights">
                                Flights
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/trains">
                                Trains
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/hotels">
                                Hotels
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/restaurants">
                                Restaurants
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/experiences">
                                Experiences
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto display-flex justify-content-evenly align-items-center gap-2">
                        <Nav.Link as={Link} to="/cart">
                            {" "}
                            {/* shopping cart */}
                            <button className="border border-0 rounded bg-transparent fs-3 text-white">
                                <FontAwesomeIcon icon={faSuitcaseRolling} />
                            </button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            <button className="border border-0 rounded bg-transparent fs-4 text-white">
                                <FontAwesomeIcon icon={faUserPen} />{" "}
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar
