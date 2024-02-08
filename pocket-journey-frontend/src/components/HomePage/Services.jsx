import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import service1 from "../../images/service1.png"
import service2 from "../../images/service2.png"
import service3 from "../../images/service3.webp"
import service4 from "../../images/service4.png"

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    height: 100%; // Ensures full height
    padding: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export default function Services() {
    const data = [
        {
            icon: service1,
            title: "Get Best Prices",
            subTitle:
                "Make the most of our app-exclusive discounts and enjoy cost-effective travel planning.",
        },
        {
            icon: service2,
            title: "Global Community",
            subTitle:
                "Join the conversation and share your experiences with travel enthusiasts.",
        },
        {
            icon: service3,
            title: "Flexible Payment",
            subTitle:
                "Enjoy the ease and flexibility of our various payment options, tailored to your convenience.",
        },
        {
            icon: service4,
            title: "Local Explorer",
            subTitle:
                "Discover hotels and must-visit places near you easily, all with just a single click.",
        },
    ]

    return (
        <Container style={{ padding: "5rem 0" }}>
            <Row>
                {data.map((service, index) => (
                    <Col key={index} xs={12} md={6} lg={3} className="mb-4">
                        <StyledCard>
                            <Card.Body className="card-content bg-light">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={service.icon}
                                        alt=""
                                        style={{ height: "2.8rem" }}
                                    />
                                </div>
                                <Card.Title className="fw-bold mt-2 color-icon">
                                    {service.title}
                                </Card.Title>
                                <Card.Text>{service.subTitle}</Card.Text>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
