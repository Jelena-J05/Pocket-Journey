import React from 'react';
import { Carousel, Button, Form, Col, Row, Container } from 'react-bootstrap';

const WelcomePage = () => {
/*   const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic 
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration logic 
  };
 */
  return (
    <Container>
{/*       <Carousel>
      </Carousel>
 */}
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={{ span: 6, offset: 3 }}>
          <Button variant="secondary">
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
