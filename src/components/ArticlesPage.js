import React, { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ArticlesPage = () => {
  // Placeholder data for articles
  // const articles = [
  //   { id: 1, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
  //   { id: 2, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
  //   { id: 3, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
  //   { id: 4, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
  //   { id: 5, title: 'Article 1', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', tags: ['Technology', 'Programming'] },
  //   { id: 6, title: 'Article 2', thumbnail: 'https://placekitten.com/200/100', description: 'Lorem ipsum dolor sit ame', tags: ['Science', 'Innovation'] },
  //   // Add more articles as needed
  // ];
  const [articles, setArtworks] = useState([]);
  const [artworks2, setArtworks2] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  
  useEffect(() => {
    // Simulated data fetch or API call to get the list of artworks
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      try {
        // Simulated data
        // const response = await fetch('/api/artworks');
        // const data = await response.json();
        const data = [
          {
            "id": 1,
            "imageUrl" : "https://source.unsplash.com/400x200/?kid",
            "title" : "Artwork 1",
            "artist" : "Sodiq",
            "description" : "This is the first artwork",
            "relatedText" : "A short text about the geogrpahy and history can go here",
          },
          {
            "id": 2,
            "imageUrl" : "https://source.unsplash.com/400x200/?kid",
            "title" : "Artwork 2",
            "artist" : "Sodiq",
            "description" : "This is the first artwork",
            "relatedText" : "A short text about the geogrpahy and history can go here",
          },
          {
            "id": 3,
            "imageUrl" : "https://source.unsplash.com/400x200/?kid",
            "title" : "Artwork 3",
            "artist" : "Sodiq",
            "description" : "This is the first artwork",
            "relatedText" : "A short text about the geogrpahy and history can go here",
          },
          {
            "id": 4,
            "imageUrl" : "https://source.unsplash.com/400x200/?kid",
            "title" : "Artwork 4",
            "artist" : "Sodiq",
            "description" : "This is the first artwork",
            "relatedText" : "A short text about the geogrpahy and history can go here",
          },
          {
            "id": 5,
            "imageUrl" : "https://source.unsplash.com/400x200/?kid",
            "title" : "Artwork 5",
            "artist" : "Sodiq",
            "description" : "This is the first artwork",
            "relatedText" : "A short text about the geogrpahy and history can go here",
          },
        ]
        axios.get('https://dh.southspace.xyz/wp-json/wp/v2/articles?_embed')
        .then(res => {
          const artworks23 = res.data;
          // this.setState({ artworks });
          setArtworks(artworks23);

          // setArtworks2(artworks23)
          /* 
          For debugging and locating required information in the feed:
          prints the full feed result to the browser console
          */
         console.log(artworks23);
        })
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };
    
    fetchData();
  }, []);
  
  // Function to filter articles based on selected tag
  // const filteredArticles = selectedTag === 'all' ? articles : articles.filter(article => article.tags.includes(selectedTag));
  // const filteredArticles = artworks.filter((artwork) =>
  //   artwork.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <Container className="my-5">
      <Row>
        {/* <Col md={9}> */}
          {/* List of articles */}
          <Row>

          {articles.map(article =>
          {
            var excerpt;
  if (article.excerpt.rendered.length > 100) {
    const truncatedContent = article.excerpt.rendered.substring(0, 100) + '...';
    excerpt = truncatedContent;
} else {
    excerpt = article.excerpt.rendered;
}
            return (
 
 <div className="artwork-card">
  <Link to={article.link}>
    
    <div> <img src={article._embedded['wp:featuredmedia'][0].source_url} />  </div>
  <div className="artwork-details">
    <h3>{article.title.rendered}</h3>
    <p>{article.description}</p>
    <p>
      <strong>Author:</strong>  {article._embedded.author.map(artist => <span>{artist.name} </span>)} 
    </p>
    <p>{window.Date(article.date)}</p>
    <p>
      {/* <strong>Related Text:</strong>  */}
      {/* <div dangerouslySetInnerHTML={{__html: artwork.excerpt.rendered}} /> */}
      <div dangerouslySetInnerHTML={{__html: excerpt}} />
    </p>
    {/* <div> Categories: </div> */}
               {/* {article._embedded['wp:term'].map(term => 
                  term.map(t => <span>{t.name} </span>))}   */}
  </div>
  </Link>
 </div>
             
             // <Col  lg={3} md={4}>
             // <Card key={article.id} className="mb-4">
             // <Link to={`/article`}>
             //   <Card.Img variant='top' src={article.thumbnail} />
             //   <Card.Body style={{fontSize:14}}>
             //     <Card.Title>{article.title}</Card.Title>
             //     <Card.Text>{article.description.slice(0,25) + ".."}</Card.Text>
             //     <div style={{fontSize:12, overflow:"hidden"}}>
             //       Tags: {article.tags.join(', ')}
             //     </div>
             //     <div className="mt-3">
             //     {/* <h5>Comments</h5> */}
             //     <p >0 comments</p>
             //       {/* Like button */}
             //       {/* <Button variant="outline-primary" onClick={() => handleLikeArticle(article.id)}>
             //         Like ({likes[article.id] || 0})
             //       </Button> */}
 
             //     </div>
             //   </Card.Body>
 
             //   </Link>
             // </Card>
             // </Col>
           );
          }
          )}
          </Row>
        {/* </Col> */}
        
      </Row>
    </Container>
  );
};

export default ArticlesPage;
