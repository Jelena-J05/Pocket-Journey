import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPlane,
    faEuro,
    faSuitcaseRolling,
    faHotel,
    faUtensils,
    faMapMarkerAlt,
    faBookmark,
    faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons"

function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
}

function SearchResults({ results, category }) {
    // Se non ci sono risultati, non renderizzare nulla
    if (!Array.isArray(results) || results.length === 0) {
        return null
    }

    return (
        <Container className="mt-4">
            <Row className="d-flex justify-content-center mt-5">
                <Col md="4">
                    {results.map((result, index) => (
                        <Card key={index} className="mt-4 mb-4 border border-4">
                            <Card.Body className="fs-4">
                                <div>
                                    <div>
                                    <FontAwesomeIcon
                                            icon={
                                                category === "FLIGHTS"
                                                ? faPlaneDeparture
                                                : category === "HOTELS"
                                                ? faHotel
                                                : category === "RESTAURANTS"
                                                ? faUtensils
                                                : faPlaneDeparture// Fallback per le categorie non specificate
                                        }
                                        className="ms-2 me-2 color-icon"
                                    />
                                        <span className="fs-3 fw-bold me-3">
                                            {result.from ||
                                                result.name ||
                                                result.city}
                                        </span>
                                        <span className="fs-3 fw-bold">
                                            {result.to ||
                                                result.name ||
                                                result.city}
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            {" "}
                                            {result.departureDate && (
                                                <>
                                                    Departure:{" "}
                                                    {formatDate(
                                                        result.departureDate
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        {result.returnDate && (
                                            <>
                                                Return:{" "}
                                                {formatDate(result.returnDate)}
                                            </>
                                        )}
                                        {result.checkOut && (
                                            <>
                                                Check-Out:{" "}
                                                {formatDate(result.checkOut)}
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    {
                                        // Determina quale URL utilizzare per l'immagine, se disponibile
                                        (result.logo || result.image) && (
                                            <img
                                                src={
                                                    result.logo || result.image
                                                }
                                                className="img-fluid logo-img"
                                                alt="Logo"
                                            />
                                        )
                                    }
                                </div>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-around align-items-center">
                                <p className="fs-5">
                                    Price:{" "}
                                    <span className="fs-3 fw-bold color-icon">
                                        {result.price || result.averageCost}
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faEuro}
                                        className="fs-3 fw-bold ms-2 color-icon"
                                    />
                                </p>
                                <Button className="button-style fs-5 fw-bold p-2">
                                    Add to{" "}
                                    {category === "HOTELS"
                                        ? "Bookmarks"
                                        : "Cart"}{" "}
                                    <FontAwesomeIcon
                                        icon={
                                            category === "HOTELS"
                                                ? faBookmark
                                                : faSuitcaseRolling
                                        }
                                    />
                                </Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResults
