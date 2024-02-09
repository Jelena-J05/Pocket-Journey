import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserPen,
    faSuitcaseRolling,
    faPeopleRoof,
    faPlaneUp,
    faUserMinus,
    faGear,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import DeleteAccount from "../UserAccount/DeleteAccount"
import { useUser } from "../../contexts/UserContext"
import { useCart } from "../../contexts/CartContext"

function NavBar() {
    const { user, setUser } = useUser()
    const { cartItems } = useCart()

    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setItemCount(count)
    }, [cartItems])

    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleShowDeleteModal = () => {
        setShowDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
    }

    const [token, setToken] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        const authToken = localStorage.getItem("token")

        if (userData && authToken) {
            setUser(JSON.parse(userData))
            setToken(authToken)
        }
    }, [])

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
        navigate("/login")
    }

    return (
        <Navbar expand="lg" bg="dark" className="py-0">
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
                    <Nav className="justify-content-center gap-4">
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
                    </Nav>
                    <Nav className="ms-auto display-flex justify-content-evenly align-items-center gap-2">
                        <Nav.Link as={Link} to="/cart">
                            {" "}
                            {/* shopping cart */}
                            <button className="position-relative border-0 bg-transparent text-white">
                                Pay
                                <FontAwesomeIcon
                                    icon={faSuitcaseRolling}
                                    className="fs-4 ms-2"
                                />
                                <span
                                    className="badge bg-secondary position-absolute top-0 start-100 translate-middle button-style"
                                    style={{
                                        fontSize: "0.6em",
                                        padding: "0.25em 0.4em",
                                    }}
                                >
                                    {itemCount}
                                </span>
                            </button>
                        </Nav.Link>
                        {!user ? (
                            <Nav.Link as={Link} to="/login">
                                <button className="border border-0 rounded bg-transparent text-white">
                                    <span>Login</span>
                                    <FontAwesomeIcon
                                        icon={faUserPen}
                                        className="fs-5 ms-2"
                                    />
                                </button>
                            </Nav.Link>
                        ) : (
                            <NavDropdown
                                title={
                                    <span>
                                        <img
                                            src={`${
                                                user.avatar
                                            }?${new Date().getTime()}`}
                                            alt="User Avatar"
                                            className="navbar-avatar rounded-circle img-fluid m-2"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                        />
                                        {user.name}
                                    </span>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    onClick={() => navigate("/profile")}
                                >
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        className="fs-6 me-2 pe-1"
                                    />
                                    Edit Account
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="#action2"
                                    onClick={handleShowDeleteModal}
                                >
                                    <FontAwesomeIcon
                                        icon={faUserMinus}
                                        className="fs-6 me-2"
                                    />
                                    Delete Account
                                </NavDropdown.Item>

                                <DeleteAccount
                                    show={showDeleteModal}
                                    handleClose={handleCloseDeleteModal}
                                    userId={user ? user.id : null}
                                    token={token}
                                />

                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="fs-6 me-2"
                                    />{" "}
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar
