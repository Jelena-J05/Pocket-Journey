/* import React, { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowDownWideShort,
    faEuro,
    faPlane,
    faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons"
import { faSearchengin } from "@fortawesome/free-brands-svg-icons"
import FooterDark from "./FooterDark"

function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const formattedDate = new Date(dateString).toLocaleDateString(
        "en-US",
        options
    )
    return formattedDate
}

function BookFlights() {
    const initialFlightData = {
        from: "",
        to: "",
        departureDate: "",
        returnDate: "",
        adults: "",
        children: "",
        infants: "",
        airlineCompany: "",
        logo: "",
        price: "",
        oneWay: false,
    };
    
    const [flightData, setFlightData] = useState({initialFlightData})

    /* const [modalShow, setModalShow] = useState(false)
 */
    /* const [searchResults, setSearchResults] = useState([])

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target
        setFlightData({
            ...flightData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:3030/api/flights", {
                method: "GET",
            })
            const data = await response.json()

            const filteredData = data.filter((flight) => {
                const matchesDeparture =
                    flight.from === flightData.from &&
                    flight.to === flightData.to &&
                    flight.departureDate === flightData.departureDate
                const matchesReturn =
                    !flightData.oneWay &&
                    flight.from === flightData.to &&
                    flight.to === flightData.from &&
                    flight.departureDate === flightData.returnDate

                return matchesDeparture || matchesReturn
            })

            setSearchResults(filteredData)
            setFlightData(initialFlightData);

        } catch (error) {
            console.error("Flights not found:", error)
        }
    }

    const handleGuestsChange = (name, value) => {
        setFlightData({ ...flightData, [name]: value })
    }

    /* const openModal = () => setModalShow(true)
    const closeModal = () => setModalShow(false) */

    /* return (
        <>
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md="6">
                                    <Form.Group controlId="from">
                                        <Form.Label>From</Form.Label>
                                        <Form.Control
                                            name="from"
                                            type="text"
                                            value={flightData.from}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group controlId="to">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control
                                            name="to"
                                            type="text"
                                            value={flightData.to}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group controlId="departureDate">
                                        <Form.Label>Departure</Form.Label>
                                        <Form.Control
                                            name="departureDate"
                                            type="date"
                                            value={flightData.departureDate}
                                            onChange={handleInputChange}
                                            className="text-center"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md="3">
                                    <Form.Group controlId="returnDate">
                                        <Form.Label>Return</Form.Label>
                                        <Form.Control
                                            name="returnDate"
                                            type="date"
                                            value={flightData.returnDate}
                                            onChange={handleInputChange}
                                            disabled={flightData.oneWay}
                                            className="text-center"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md="auto d-flex align-items-end justify-content-end">
                                    <Button
                                        className="btn button-style text-white fw-bold"
                                        onClick={openModal}
                                    >
                                        Guests
                                    </Button>
                                </Col>
                                <Col
                                    md="auto"
                                    className="d-flex align-items-end justify-content-end"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        id="oneWayCheckbox"
                                        label="One-way"
                                        name="oneWay"
                                        checked={flightData.oneWay}
                                        onChange={handleInputChange}
                                        className="me-2"
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-flex-start">
                            <Col md="4">
                                <Button
                                    className="btn btn-lg button-style text-white fw-bold px-4"
                                    onClick={handleSearch}
                                >
                                    Search
                                    <FontAwesomeIcon
                                        icon={faSearchengin}
                                        className="fs-4 ms-2 mt-1"
                                    />
                                </Button>
                            </Col>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {searchResults.length > 0 && (
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="6">
                        <p>
                            <FontAwesomeIcon
                                icon={faArrowDownWideShort}
                                className="fs-1 fw-bold ms-2 color-icon"
                            />
                        </p>
                        {searchResults.map((flight, index) => (
                            <Card
                                key={index}
                                className="mt-4 mb-4 border border-4"
                            >
                                <Card.Body className="fs-4">
                                    <div>
                                        <div>
                                            <span className="fs-3 fw-bold">
                                                {flight.from}
                                            </span>
                                            <FontAwesomeIcon
                                                icon={faPlane}
                                                className="ms-2 me-2 color-icon "
                                            />
                                            <span className="fs-3 fw-bold">
                                                {flight.to}
                                            </span>
                                        </div>
                                        <div className="fst-italic">
                                            <span className="me-4">
                                                Departure:{" "}
                                                {formatDate(
                                                    flight.departureDate
                                                )}
                                            </span>
                                            <span>
                                                Return:{" "}
                                                {formatDate(flight.returnDate)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={flight.logo}
                                            className="img-fluid logo-img"
                                            alt={`${flight.airlineCompany} Logo`}
                                        />
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-around align-items-center">
                                    <p className="fs-5">
                                        Price:{" "}
                                        <span className="fs-3 fw-bold color-icon">
                                            {flight.price}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faEuro}
                                            className="fs-3 fw-bold ms-2 color-icon"
                                        />
                                    </p>
                                    <Button className="button-style fs-5 fw-bold p-2">
                                        Add to{" "}
                                        <FontAwesomeIcon
                                            icon={faSuitcaseRolling}
                                        />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        ))}
                    </Col>
                </Row>
            )}
            <Modal show={modalShow} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Guests</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="adults">
                        <Form.Label>Adults</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            value={flightData.adults}
                            onChange={(e) =>
                                handleGuestsChange("adults", e.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="children">
                        <Form.Label>Children</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            value={flightData.children}
                            onChange={(e) =>
                                handleGuestsChange("children", e.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="infants">
                        <Form.Label>Infants</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            value={flightData.infants}
                            onChange={(e) =>
                                handleGuestsChange("infants", e.target.value)
                            }
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal}>Save</Button>
                </Modal.Footer>
            </Modal>
        </Container>
        <FooterDark/>
        </>
    )
}

export default BookFlights  */