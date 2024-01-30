import React, { useState } from "react"
import {
    Container,
    Row,
    Col,
    Modal,
    Button,
    Form,
    Toast,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const [showContactModal, setShowContactModal] = useState(false)
    const handleCloseContactModal = () => setShowContactModal(false)
    const handleShowContactModal = () => setShowContactModal(true)

    const [showToast, setShowToast] = useState(false)
    const [confirmationMessage, setConfirmationMessage] = useState("")
    const [contactForm, setContactForm] = useState({
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", contactForm.email)
        console.log("Message:", contactForm.message)
        setContactForm({
            email: "",
            message: "",
        })
        handleCloseContactModal()
        setConfirmationMessage(
            "✅ Your message has been sent. We will come back to you at the earliest!"
        )
        setShowToast(true)

        setTimeout(() => {
            setShowToast(false)
        }, 5000)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setContactForm({
            ...contactForm,
            [name]: value,
        })
    }

    const [showSubscribeToast, setShowSubscribeToast] = useState(false)
    const [subscribeConfirmationMessage, setSubscribeConfirmationMessage] =
        useState("")
    const [emailInput, setEmailInput] = useState("")

    const handleSubscribe = () => {
        if (emailInput === "") {
            return
        }
        setSubscribeConfirmationMessage("🎉You have subscribed successfully!")
        setShowSubscribeToast(true)

        setTimeout(() => {
            setShowSubscribeToast(false)
        }, 5000)
        setEmailInput("")
    }

    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col lg={4} className="mb-4 mb-md-0">
                        <h5>Enjoy your journey with us!</h5>
                        <p>
                            Pocket Journey is an all-in-one travel platform that
                            provides you with a seamless experience.
                        </p>
                    </Col>
                    <Col lg={4} className="mb-4 mb-md-0">
                        <ul className="list-unstyled mb-2">
                            <li>
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#!">FAQ</a>
                            </li>
                            <li>
                                <a href="#!">Terms & Conditions</a>
                            </li>
                        </ul>
                        <Col lg={4} className="mb-4 mb-md-0">
                            <Button
                                className="fw-bold button-style"
                                onClick={handleShowContactModal}
                            >
                                Contact us
                            </Button>
                        </Col>
                    </Col>
                    <Col lg={4} className="mb-4 mb-md-0">
                        <h5>Subscribe to our Newsletter</h5>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: "5px",
                                    border: "1px solid #ffa057",
                                    borderRadius: "4px",
                                    width: "270px",
                                }}
                                required
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                            <Button
                                type="button"
                                className="button-style fw-bold"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </Button>
                        </div>
                        {subscribeConfirmationMessage && (
                            <Toast
                                show={showSubscribeToast}
                                onClose={() => setShowSubscribeToast(false)}
                                className="toast-style fs-5"
                                autohide
                                style={{
                                    position: "fixed",
                                    bottom: "5%",
                                    right: "20%",
                                    transform: "translateX(50%)",
                                }}
                            >
                                <Toast.Body>
                                    {subscribeConfirmationMessage}
                                </Toast.Body>
                            </Toast>
                        )}
                    </Col>
                </Row>
            </Container>
            <div className="bg-dark text-white p-3">
                <Container>
                    <Row>
                        <Col
                            xs={12}
                            md={6}
                            className="d-flex align-items-center gap-2"
                        >
                            <span>Follow us</span>
                            <a
                                href="link-to-facebook"
                                className="btn btn-floating text-white border border-1 px-3"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="icon"
                                />
                            </a>
                            <a
                                href="link-to-twitter"
                                className="btn btn-floating text-white border border-1"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="icon"
                                />
                            </a>
                            <a
                                href="link-to-instagram"
                                className="btn btn-floating text-white border border-1"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="icon"
                                />
                            </a>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            className="d-flex align-items-center justify-content-md-end"
                        >
                            <span>
                                © 2024 Pocket Journey. All rights reserved.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                show={showContactModal}
                onHide={handleCloseContactModal}
                centered
                dialogClassName="contact-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={contactForm.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows={4}
                                placeholder="Enter your message here"
                                value={contactForm.message}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button
                            onClick={handleCloseContactModal}
                            type="submit"
                            className="button-style fw-bold mt-3"
                        >
                            Send message
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {confirmationMessage && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    className="toast-style fs-5"
                    autohide
                    style={{
                        position: "fixed",
                        bottom: "5%",
                        right: "-10%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Toast.Body>{confirmationMessage}</Toast.Body>
                </Toast>
            )}
        </footer>
    )
}
export default Footer
