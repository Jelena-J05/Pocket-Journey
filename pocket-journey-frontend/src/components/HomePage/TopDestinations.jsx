import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import America from "../../images/America.jpg"
import Italy from "../../images/Italy.jpg"
import Japan from "../../images/Japan.jpg"
import Australia from "../../images/Australia.jpg"

const HoverEffect = styled.div`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`

const DestinationCard = styled(Card)`
    position: relative;
    width: 100%; // Prende la larghezza completa della colonna
    height: 350px; // Altezza aumentata per un aspetto più verticale
    background-size: cover;
    background-position: center; // Centra l'immagine di sfondo
    overflow: hidden; // Assicura che tutto il contenuto rimanga dentro la card
`

const DestinationTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa057;
    padding: 0.5rem;
    color: white;
    font-weight: bold;
`

const ToursCount = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
`

export default function TopDestinations() {
    const destinations = [
        {
            title: "Japan",
            image: Japan,
            tours: "Tokyo",
        },
        {
            title: "Italy",
            image: Italy,
            tours: "Venice",
        },
        {
            title: "Australia",
            image: Australia,
            tours: "Melbourne",
        },
        {
            title: "America",
            image: America,
            tours: "New York",
        },
    ]

    return (
        <Container>
            <h2 className="color-icon fw-bold">Top Destinations </h2>
            <Row className="mt-4">
                {destinations.map((destination, index) => (
                    <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="mb-4"
                    >
                        <HoverEffect>
                            <DestinationCard
                                style={{
                                    backgroundImage: `url(${destination.image})`,
                                }}
                            >
                                <DestinationTitle className="rounded-2">
                                    {destination.title}
                                </DestinationTitle>
                                <ToursCount>{destination.tours}</ToursCount>
                            </DestinationCard>
                        </HoverEffect>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
