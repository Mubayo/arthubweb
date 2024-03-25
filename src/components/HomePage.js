import React , { useState } from 'react';
// import { Navbar, Nav,  Container, Row, Col } from 'react-bootstrap';
import images1 from '../assets/images/images1.jpg'
import { Link, useNavigation } from 'react-router-dom';
import '../assets/css/styles.css';
import { Container,Carousel, Row, Col, Tabs, Tab, Card, Button, Overlay, Form } from 'react-bootstrap';
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
    // Placeholder artworks data
  const artworks = [
    { id: 1, title: 'Artwork 1', imageUrl: 'https://source.unsplash.com/300x200/?shoe' },
    { id: 2, title: 'Artwork 2', imageUrl: 'https://source.unsplash.com/300x200/?face' },
    { id: 3, title: 'Artwork 3', imageUrl: 'https://source.unsplash.com/300x200/?stamp' },
    // Add more artworks as needed
  ];
  // const navigation = useNavigation();
  return (
    <div>
      {/* Featured Content/Carousel */}
      {/* <Carousel> */}
      <div style={{position: "relative"}}>
      <div style={{    position: "relative",
    width: "100%",
    overflow: "hidden"}}>
        {/* <Carousel.Item> */}
          <img
          style={{height:"450px", objectFit:"cover"}}
            className="d-block w-100"
            src={images1}
            alt="First slide"
          />
          <Overlay ></Overlay>
          <div className="overlay"></div>
          <Carousel.Caption style={{bottom:"7.25rem"}}>
            <h3 style={{fontSize:"40px", fontWeight:"bold"}} >Welcome to our Routing Diasporic Histories!</h3>
            <p style={{color:"white"}} >Description for the first announcement.</p>
            <Form className="mb-4 w-100" style={{flexDirection:"row", justifyContent:"center"}}>
            <Form.Group controlId="searchForm" style={{marginRight:5, width:"70%"}}>
              <Form.Control
                type="text"
                placeholder="Search for artworks, artists, articles, or tags"
                value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />

            </Form.Group>
            <Button href='/search' variant="danger" 
            // onClick={() => navigation.location("/search") }
            >
              Search
            </Button>
          </Form>
          </Carousel.Caption>
        {/* Add more Carousel.Items as needed */}
      </div>
      </div>
      {/* </Carousel> */}

      {/* Sections for Different Categories/Themes */}
      <Container className="my-5">
        <Row>
          {/* <Col  sm={6} md={4} lg={3} className="mb-4"> */}
            {/* <img className='card-img card-image'  alt="Category 1" />
            <h2 className='card-title'>Category 1</h2> */}
            
            {/* <Card>
                <Link to={`/artwork/1`}>
                    <Card.Img variant="top" src="https://source.unsplash.com/400x200/?animal" />
                    <Card.Body>
                        <Card.Title>Featured Content</Card.Title>
                        <p className='card-subtitle'>Check out our latest announcements and popular artworks from talented artists.</p>
                    </Card.Body>
                </Link>
            </Card> */}
          {/* </Col> */}
          <Col sm={6} md={4} lg={4} className="mb-4">
            <Card>
                <Link to={`/artist`}>
                    <Card.Img variant="top" src="https://source.unsplash.com/400x200/?abstract" />
                    <Card.Body>
                        <Card.Title>Artists</Card.Title>
                        <p className='card-subtitle'>Get to know the artists behind the artworks and their creative journey.</p>
                    </Card.Body>
                </Link>
            </Card>
          </Col>
          
          <Col sm={6} md={4} lg={4} className="mb-4">
            <Card>
                <Link to={`/articles`}>
                    <Card.Img variant="top" src="https://source.unsplash.com/400x200/?creative" />
                    <Card.Body>
                        <Card.Title>Writing</Card.Title>
                        <p className='card-subtitle'>Discover insightful articles about art and its impact on society.</p>
                    </Card.Body>
                </Link>
            </Card>
          </Col>
          
          <Col sm={6} md={4} lg={4} className="mb-4">
            <Card>
                <Link to={`/artworks`}>
                    <Card.Img variant="top" src="https://source.unsplash.com/400x200/?kid" />
                    <Card.Body>
                        <Card.Title>Themes and styles</Card.Title>
                        <p className='card-subtitle'>Explore different themes and styles of artwork that interest you.</p>
                    </Card.Body>
                </Link>
            </Card>
          </Col>
        </Row>
        <hr></hr>
        <Row>
                {artworks.map(
                    (artwork) => (
                  <Col key={artwork.id} sm={6} md={4} lg={4} className="mb-4">
                    {/* <a href={`/artwork/${artwork.id}`}> */}

                    <Card>
                    <Link to={`/artwork/${artwork.id}`}>
                      <Card.Img variant="top" src={artwork.imageUrl} />
                      <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                        <Card.Subtitle style={{fontSize:13, color:"gray", fontStyle:"italic"}} >Artist Name</Card.Subtitle>
                      </Card.Body>
                    </Link>
                    </Card>
                  </Col>
                )
                )}
              </Row>
      </Container>
    </div>
  );
};

export default HomePage;
