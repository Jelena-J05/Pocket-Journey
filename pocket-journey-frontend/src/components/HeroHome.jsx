import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LazyHero from "react-lazy-hero";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroText from "./HeroText";
import photo1 from "../images/photo1.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";

const images = [
  { src: photo1, alt: "Scenery 1" },
  { src: photo3, alt: "Scenery 2" },
  { src: photo4, alt: "Scenery 2" },
];

const HeroHome = () => {
  return (
    <>
      <LazyHero
        className="hero-container bg-light"
        parallaxOffset={100}
        opacity="0.3"
        minHeight="35vh"
      >
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={4} className="mb-0 pb-0">
              <Card className="hero-card p-0">
                <Card.Img
                  variant="top"
                  src={image.src}
                  alt={image.alt}
                  className="card-img-top img-fluid"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </LazyHero>
      <HeroText />
    </>
  );
};

export default HeroHome;

/* import LazyHero from "react-lazy-hero";
import HeroText from "./HeroText";


function HeroHome() {
  return (
    <LazyHero
      minHeight="50vh" 
      parallaxOffset={100}
      className="centered-background"
      opacity="0.3"
    >
      <HeroText />
    </LazyHero>
  );
}

export default HeroHome;
 */
