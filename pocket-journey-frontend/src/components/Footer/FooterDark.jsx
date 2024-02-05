import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function FooterDark () {
  return (
    <div className="bg-dark text-white p-3 fixed-bottom">
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center gap-2">
            <span>Follow us</span>
            <a href="link-to-facebook" className="btn btn-floating text-white border border-1 px-3">
              <FontAwesomeIcon icon={faFacebookF} className="icon"/>
            </a>
            <a href="link-to-twitter" className="btn btn-floating text-white border border-1">
              <FontAwesomeIcon icon={faTwitter} className="icon"/>
            </a>
            <a href="link-to-instagram" className="btn btn-floating text-white border border-1">
              <FontAwesomeIcon icon={faInstagram}className="icon" />
            </a>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-end">
            <span>© 2024 Pocket Journey. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterDark;


