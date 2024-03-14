import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const ArtistPage = () => {
    // Placeholder artist data
  const artist = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium...',
    profilePicture: 'https://placekitten.com/200/200', // Replace with actual image URL
    socialMedia: {
      twitter: 'https://twitter.com/example',
      instagram: 'https://www.instagram.com/example/',
      facebook: 'https://www.facebook.com/example/',
    },
    contactEmail: 'john.doe@example.com',
  };

  // Placeholder artworks data
  const artworks = [
    { id: 1, title: 'Artwork 1', imageUrl: 'https://placekitten.com/300/200' },
    { id: 2, title: 'Artwork 2', imageUrl: 'https://placekitten.com/300/200' },
    { id: 3, title: 'Artwork 3', imageUrl: 'https://placekitten.com/300/200' },
    // Add more artworks as needed
  ];

  const [activeTab, setActiveTab] = useState('all');

  const filterArtworks = (category) => {
    if (category === 'all') {
      return artworks;
    }
    return artworks.filter((artwork) => artwork.category === category);
  };
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          {/* Artist Profile Section */}
          <div className="mb-4">
            <img src={artist.profilePicture} alt={artist.name} className="img-fluid rounded-circle" />
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <div className="social-media-links">
              <a href={artist.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={artist.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <Button href={`mailto:${artist.contactEmail}`} variant="primary" className="mt-3">
              Contact Artist
            </Button>
          </div>
        </Col>
        <Col md={8}>
          {/* Artworks Section */}
          <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <Tab eventKey="all" title="All">
              <Row>
                {filterArtworks('all').map((artwork) => (
                  <Col key={artwork.id} sm={6} md={4} lg={3} className="mb-4">
                    {/* <a href={`/artwork/${artwork.id}`}> */}

                    <Card>
                    <Link to={`/artwork/${artwork.id}`}>
                      <Card.Img variant="top" src={artwork.imageUrl} />
                      <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                      </Card.Body>
                    </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            {/* Add more tabs for different categories/series */}
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistPage;
