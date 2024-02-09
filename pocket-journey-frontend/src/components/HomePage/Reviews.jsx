import React from "react"
import { Carousel, Container, Row, Col } from "react-bootstrap"
import "./Reviews.scss"
import Rome from "../../images/Rome.webp"
import Paris from "../../images/Paris.jpg"
import Tokyo from "../../images/Tokyo.jpg"

const reviews = [
    {
        title: "Adventure in Rome",
        content:
            "Pocket Journey transformed my trip to Rome into an unforgettable experience! The app's recommendations for hidden gems allowed me to explore the Eternal City beyond the usual tourist spots. The user-friendly interface made booking and planning incredibly easy. A must-have for every traveler!",
        image: Rome,
    },
    {
        title: "Discovering Tokyo",
        content:
            "Using Pocket Journey for my Tokyo adventure was a game-changer! The app suggested unique cultural experiences that I would have never found on my own. From traditional tea ceremonies to vibrant street food tours, every moment was perfectly planned. The photo-sharing feature also made it a breeze to share memories with fellow travelers.",
        image: Tokyo,
    },
    {
        title: "Parisian Dreams",
        content:
            "My dream of experiencing Paris was beautifully realized thanks to Pocket Journey. The app not only helped me find the best deals on flights and accommodations but also connected me with local events that made my stay special. The community feedback and reviews were invaluable in choosing the right experiences.",
        image: Paris,
    },
]

const Reviews = () => {
    return (
        <>
            <Container>
                <h2 className="color-icon fw-bold mt-5 mb-3">
                    {" "}
                    Our travellers say ...{" "}
                </h2>
                <Carousel className="mb-5">
                    {reviews.map((review, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-end align-items-center">
                                <Col xs={12} md={12}>
                                    <Carousel.Caption>
                                        <h3 className="fw-bold">
                                            {review.title}
                                        </h3>
                                        <p>{review.content}</p>
                                    </Carousel.Caption>
                                </Col>
                                <Col xs={12} md={12}>
                                    <img
                                        className="d-block w-100 rounded-3 img-height"
                                        src={review.image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}

export default Reviews
