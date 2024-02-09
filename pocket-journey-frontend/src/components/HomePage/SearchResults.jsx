import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useCart } from "../../contexts/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEuro,
    faSuitcaseRolling,
    faHotel,
    faUtensils,
    faBookmark,
    faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons"

function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
}

function SearchResults({ results, category }) {
    const { addToCart } = useCart()
    if (!Array.isArray(results) || results.length === 0) {
        return null
    }

    return (
        <Container className="mt-4">
            <Row className="d-flex justify-content-center mt-5">
                <Col md="4">
                    {results.map((result, index) => {
                        const guests = result.guests || 2
                        const handleAddToCart = () => {
                            const itemWithCategory = { ...result, category }
                            addToCart(itemWithCategory, guests)
                        }
                        return (
                            <Card
                                key={index}
                                className="mt-4 mb-4 border border-4"
                            >
                                <Card.Body className="fs-4">
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={
                                                    category === "FLIGHTS"
                                                        ? faPlaneDeparture
                                                        : category === "HOTELS"
                                                        ? faHotel
                                                        : category ===
                                                          "RESTAURANTS"
                                                        ? faUtensils
                                                        : faPlaneDeparture
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
                                                    {formatDate(
                                                        result.returnDate
                                                    )}
                                                </>
                                            )}
                                            {result.checkOut && (
                                                <>
                                                    Check-Out:{" "}
                                                    {formatDate(
                                                        result.checkOut
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {(result.logo || result.image) && (
                                            <img
                                                src={
                                                    result.logo || result.image
                                                }
                                                className="img-fluid logo-img"
                                                alt="Logo"
                                            />
                                        )}
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
                                    <Button
                                        className="button-style fs-5 fw-bold p-2"
                                        onClick={handleAddToCart}
                                    >
                                        Add to{" "}
                                        {category === "HOTELS"
                                            ? "Bookmarks"
                                            : "Cart"}
                                        <FontAwesomeIcon
                                            icon={
                                                category === "HOTELS"
                                                    ? faBookmark
                                                    : faSuitcaseRolling
                                            }
                                            className="ms-2"
                                        />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResults
