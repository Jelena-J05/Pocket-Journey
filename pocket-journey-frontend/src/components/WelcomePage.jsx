import React from 'react';
import { Carousel, Button, Form, Col, Row, Container } from 'react-bootstrap';

const WelcomePage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <Container>
      <Carousel>
        {/* Map through your images and mission statements here */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image-src-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First mission statement</h3>
            <p>Description for the first mission.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* ...other items */}
      </Carousel>

      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Button variant="secondary" onClick={handleRegister}>
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
