import React, {useState} from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// const ArtworkPage = ({ match, history }) => {
const ArtworkPage = ({  history }) => {
    // Placeholder data for individual artwork
    const { id } = useParams();
    const artworks = [
      { id: 1, title: 'Artwork 1', artist: 'John Doe', imageUrl: 'https://placekitten.com/800/400', tags: ['Abstract', 'Colorful'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: 'Artwork 2', artist: 'Jane Smith', imageUrl: 'https://placekitten.com/800/400', tags: ['Portrait', 'Monochrome'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      // Add more artworks as needed
    ];
  
    const artworkId = parseInt(id, 10);
    const currentArtworkIndex = artworks.findIndex((artwork) => artwork.id === artworkId);
    const currentArtwork = artworks[currentArtworkIndex];
  
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
  
    const handleLike = () => {
      setLiked(!liked);
    };
  
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      setComments([...comments, comment]);
      setComment('');
    };
  
    const handleNextArtwork = () => {
      const nextIndex = (currentArtworkIndex + 1) % artworks.length;
      history.push(`/artwork/${artworks[nextIndex].id}`);
    };
  
    const handlePrevArtwork = () => {
      const prevIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
      history.push(`/artwork/${artworks[prevIndex].id}`);
    };
  
    return (
      <Container className="my-5">
        <Row>
          <Col md={8}>
            {/* Large display area for the artwork */}
            <img src={currentArtwork.imageUrl} alt={currentArtwork.title} className="img-fluid" />
  
            {/* Information panel */}
            <div className="my-4">
              <h2>{currentArtwork.title}</h2>
              <p>By {currentArtwork.artist}</p>
              <p>Tags: {currentArtwork.tags.join(', ')}</p>
              <p>{currentArtwork.description}</p>
            </div>
  
            {/* Like button and comment section */}
            <div className="my-4">
              <Button variant={liked ? 'success' : 'outline-success'} onClick={handleLike}>
                {liked ? 'Liked!' : 'Like'}
              </Button>
  
              <Form onSubmit={handleCommentSubmit} className="mt-3">
                <Form.Group controlId="commentForm">
                  <Form.Control
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Comment
                </Button>
              </Form>
  
              <div className="mt-3">
                <h4>Comments</h4>
                {comments.map((c, index) => (
                  <p key={index}>{c}</p>
                ))}
              </div>
            </div>
          </Col>
          <Col md={4}>
            {/* Related artworks or suggested content section */}
            <h4>Related Artworks</h4>
            <Card>
              <Card.Img variant="top" src="https://placekitten.com/200/100" />
              <Card.Body>
                <Card.Title>Related Artwork 1</Card.Title>
              </Card.Body>
            </Card>
  
            {/* Navigation to move to the next or previous artwork */}
            <div className="mt-4">
              <Button variant="outline-primary" onClick={handlePrevArtwork}>
                Previous Artwork
              </Button>
              <Button variant="outline-primary" onClick={handleNextArtwork} className="ml-2">
                Next Artwork
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default ArtworkPage;
