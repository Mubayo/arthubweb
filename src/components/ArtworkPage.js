import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import images1 from '../assets/images/about.jpg'

// const ArtworkPage = ({ match, history }) => {
const ArtworkPage = ({  history }) => {
    // Placeholder artwork for individual artwork
    const { id } = useParams();
    // const artworks = [
    //   { id: 1, title: 'Artwork 1', artist: 'John Doe', imageUrl: 'https://placekitten.com/800/400', tags: ['Abstract', 'Colorful'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    //   { id: 2, title: 'Artwork 2', artist: 'Jane Smith', imageUrl: 'https://placekitten.com/800/400', tags: ['Portrait', 'Monochrome'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    //   // Add more artworks as needed
    // ];
  
    const artworkId = parseInt(id, 10);
    // const currentArtworkIndex = artworks.findIndex((artwork) => artwork.id === artworkId);
    // const currentArtwork = artworks[currentArtworkIndex];
  
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [artwork, setArtwork] = useState([]);
    const [comments, setComments] = useState([]);
  
    useEffect( () => {
      console.log(id);
      // Simulated artwork fetch or API call to get the list of artworks
      // Replace this with actual artwork fetching logic
      const fetchData = async () => {
        try {
          axios.get(`https://dh.southspace.xyz/wp-json/wp/v2/artwork/${id}?_embed`)
          .then(res => {
            const artworks23 = res.data;
            // this.setState({ artworks });
            setArtwork(artworks23);
           console.log(artworks23);
          })
        } catch (error) {
          console.error('Error fetching artworks:', error);
        }
      };
      
      fetchData();
    }, []);
    const handleLike = () => {
      setLiked(!liked);
    };
  
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      setComments([...comments, comment]);
      setComment('');
    };
  
    // const handleNextArtwork = () => {
    //   const nextIndex = (currentArtworkIndex + 1) % artworks.length;
    //   history.push(`/artwork/${artworks[nextIndex].id}`);
    // };
  
    // const handlePrevArtwork = () => {
    //   const prevIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
    //   history.push(`/artwork/${artworks[prevIndex].id}`);
    // };
    const filteredArtworks = artwork;

  
    return (
      <Container className="my-5">
        <Row>
        {artwork != "" ?
        <>
          <Col md={8}>
            {/* Large display area for the artwork */}
            <img src={artwork._embedded['wp:featuredmedia'][0].source_url} alt={artwork.title.rendered} className="img-fluid" />
  
            {/* Information panel */}
            <div className="my-4">
              <h2>{artwork.title.rendered}</h2>
              <p>By {artwork.acf.artist.map((art)=> <span>{art.post_title},</span>)}</p>
              <p>Categories: {artwork.categories.map((tg)=> {

              return  <span>{tg},</span>})}</p>
              <p>Tags: {artwork.tags.map((tg)=> <span>{tg},</span>)}</p>
              <p>Date: {window.Date(artwork.date) }</p>
              <div dangerouslySetInnerHTML={{__html: artwork.content.rendered}} />
            </div>
  
            {/* Like button and comment section */}
            <div className="my-4">
              <Button variant={liked ? 'success' : 'outline-success'} onClick={handleLike}>
                {liked ? 'Liked!' : 'Like'}
              </Button>
  
              {/* <Form onSubmit={handleCommentSubmit} className="mt-3">
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
              </Form> */}
  
              {/* <div className="mt-3">
                <h4>Comments</h4>
                {comments.map((c, index) => (
                  <p key={index}>{c}</p>
                ))}
              </div> */}
            </div>
          </Col>
        </>
        :
        <></>
        }
          <Col md={4}>
            {/* Related artworks or suggested content section */}
            {/* <h4>Related Artworks</h4> */}
            <Card>
              <Card.Img variant="top" src={images1} />
              <Card.Body>
                <Card.Title>Artwork</Card.Title>
              </Card.Body>
            </Card>
  
            {/* Navigation to move to the next or previous artwork */}
            <div className="mt-4">
              {/* <Button variant="outline-primary" onClick={handlePrevArtwork}>
                Previous Artwork
              </Button> */}
              {/* <Button variant="outline-primary" onClick={handleNextArtwork} className="ml-2">
                Next Artwork
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default ArtworkPage;
