import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlane, FaTrain, FaHotel, FaUtensils, FaStar } from 'react-icons/fa'; // Importa le icone di Font Awesome

const BookingOptions = () => {
  const options = [
    { key: 'flights', text: 'Flights', icon: <FaPlane />, link: '/flights' },
    { key: 'trains', text: 'Trains', icon: <FaTrain />, link: '/trains' },
    { key: 'hotels', text: 'Hotels', icon: <FaHotel />, link: '/hotels' },
    { key: 'restaurants', text: 'Restaurants', icon: <FaUtensils />, link: '/restaurants' },
    { key: 'experiences', text: 'Experiences', icon: <FaStar />, link: '/experiences' },
  ];

  return (
    <Container>
    <Row xs={12} md={4} lg={6} className="g-4 mt-5 mb-5 display-flex justify-content-evenly">
      {options.map(option => (
        <Col key={option.key}>
          <Card href={option.link} className="card-hover-animate">
            <Card.Body>
              <Card.Title>
                {option.icon} 
              </Card.Title>
              <Card.Text>
                {option.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default BookingOptions;
