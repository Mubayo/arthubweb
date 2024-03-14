import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SearchPage = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const artworks = []
  const articles = []
  const artists = []
  const tags = []
  const filteredResults = filterResults();

  function filterResults() {
    let filteredArtworks = artworks.filter(artwork => artwork.title.toLowerCase().includes(searchQuery.toLowerCase()));
    let filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(searchQuery.toLowerCase()));
    let filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
    let filteredTags = tags.filter(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    switch (selectedCategory) {
      case 'artworks':
        return filteredArtworks;
      case 'artists':
        return filteredArtists;
      case 'articles':
        return filteredArticles;
      case 'tags':
        return filteredTags;
      default:
        return [...filteredArtworks, ...filteredArtists, ...filteredArticles, ...filteredTags];
    }
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          {/* Search bar in the header */}
          <Form className="mb-4">
            <Form.Group controlId="searchForm">
              <Form.Control
                type="text"
                placeholder="Search for artworks, artists, articles, or tags"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={() => setSelectedCategory('all')}>
              Clear Filters
            </Button>
          </Form>

          {/* Search results */}
          {filteredResults.map((result, index) => (
            <Card key={index} className="mb-4">
              <Card.Img variant="top" src={result.thumbnail} />
              <Card.Body>
                <Card.Title>{result.title || result.name}</Card.Title>
                <Card.Text>{result.description || ''}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          {/* Filters */}
          <h4>Filters</h4>
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
            className="mb-2"
            onClick={() => setSelectedCategory('all')}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === 'artworks' ? 'primary' : 'outline-primary'}
            className="mb-2"
            onClick={() => setSelectedCategory('artworks')}
          >
            Artworks
          </Button>
          <Button
            variant={selectedCategory === 'artists' ? 'primary' : 'outline-primary'}
            className="mb-2"
            onClick={() => setSelectedCategory('artists')}
          >
            Artists
          </Button>
          <Button
            variant={selectedCategory === 'articles' ? 'primary' : 'outline-primary'}
            className="mb-2"
            onClick={() => setSelectedCategory('articles')}
          >
            Articles
          </Button>
          <Button
            variant={selectedCategory === 'tags' ? 'primary' : 'outline-primary'}
            className="mb-2"
            onClick={() => setSelectedCategory('tags')}
          >
            Tags
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
