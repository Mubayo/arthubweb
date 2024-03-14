import React from 'react';

import { Navbar, Nav, Carousel, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col>
              <h5>Important Pages</h5>
              <ul>
                <li><a className='menu-item' href="/">Home</a></li>
                <li><a className='menu-item' href="/artist">Artists</a></li>
                <li><a className='menu-item' href="/artist">Funders and Supporters</a></li>
                {/* Add other important pages */}
              </ul>
            </Col>
            <Col>
              <h5>Contacts</h5>
              {/* Add social media icons or links */}
              <ul>
                <li><a className='menu-item' href="/">+444-987-987-9897</a></li>
                <li><a className='menu-item' href="/artist">info@rdh.com</a></li>
                {/* Add other important pages */}
              </ul>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <p>&copy; 2024 Your Website. All rights reserved.</p>
            </Col>
          </Row> */}
        </Container>
      </footer>
  );
};

export default Footer;
