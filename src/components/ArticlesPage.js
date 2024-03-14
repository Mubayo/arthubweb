import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ArticlesPage = () => {
  // Placeholder data for articles
  const articles = [
    { id: 1, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
    { id: 2, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
    { id: 3, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
    { id: 4, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
    { id: 5, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
    { id: 6, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
    // Add more articles as needed
  ];

  // State for filtering articles based on tags
  const [selectedTag, setSelectedTag] = useState('all');

  // State for comments and likes
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});

  // Function to handle adding a comment
  const handleAddComment = (articleId, comment) => {
    setComments({
      ...comments,
      [articleId]: [...(comments[articleId] || []), comment],
    });
  };

  // Function to handle liking an article
  const handleLikeArticle = (articleId) => {
    setLikes({
      ...likes,
      [articleId]: (likes[articleId] || 0) + 1,
    });
  };

  // Function to filter articles based on selected tag
  const filteredArticles = selectedTag === 'all' ? articles : articles.filter(article => article.tags.includes(selectedTag));

  return (
    <Container className="my-5">
      <Row>
        <Col md={9}>
          {/* List of articles */}
          <Row>

          {filteredArticles.map(article => (
            <Col  lg={3} md={4}>
            <Card key={article.id} className="mb-4">
            <Link to={`/article`}>
              <Card.Img variant='top' src={article.thumbnail} />
              <Card.Body style={{fontSize:14}}>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description.slice(0,25) + ".."}</Card.Text>
                <div style={{fontSize:12, overflow:"hidden"}}>
                  Tags: {article.tags.join(', ')}
                </div>
                <div className="mt-3">
                {/* <h5>Comments</h5> */}
                <p >0 comments</p>
                  {/* Like button */}
                  {/* <Button variant="outline-primary" onClick={() => handleLikeArticle(article.id)}>
                    Like ({likes[article.id] || 0})
                  </Button> */}

                </div>
              </Card.Body>

              {/* Comment section */}
              {/* <Card.Footer>
                <h5>Comments</h5>
                {comments[article.id] && comments[article.id].map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
                <Form onSubmit={(e) => { e.preventDefault(); handleAddComment(article.id, e.target.comment.value); e.target.comment.value = ''; }}>
                  <Form.Group controlId={`commentForm-${article.id}`}>
                    <Form.Control type="text" name="comment" placeholder="Add a comment..." />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Comment
                  </Button>
                </Form>
              </Card.Footer> */}
              </Link>
            </Card>
            </Col>
          ))}
          </Row>
        </Col>
        <Col md={3}>
          {/* Filters or tags */}
          <h5>Themes and Styles</h5>
          <Button style={{marginRight:5, marginBottom:5}} variant={selectedTag === 'all' ? 'primary' : 'outline-primary'} onClick={() => setSelectedTag('all')}>
            All
          </Button>
          <Button style={{marginRight:5, marginBottom:5}} variant={selectedTag === 'Technology' ? 'primary' : 'outline-primary'} onClick={() => setSelectedTag('Technology')}>
            Technology
          </Button>
          <Button style={{marginRight:5, marginBottom:5}} variant={selectedTag === 'Science' ? 'primary' : 'outline-primary'} onClick={() => setSelectedTag('Science')}>
            Science
          </Button>
          {/* Add more tags as needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesPage;
