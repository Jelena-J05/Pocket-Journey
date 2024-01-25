import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 4
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Link 4
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-white fw-bold">
        © 2024 Pocket Journey
      </div>
    </footer>
  );
};

export default Footer;
