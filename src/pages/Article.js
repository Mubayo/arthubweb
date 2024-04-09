import React, { useState, useEffect } from 'react';
import '../assets/css/article.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = ({}) => {

  const { id } = useParams();
  const [article, setArticle] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  useEffect( () => {
    console.log(id);
    // Simulated artwork fetch or API call to get the list of artworks
    // Replace this with actual artwork fetching logic
    const fetchData = async () => {
      try {
        axios.get(`https://dh.southspace.xyz/wp-json/wp/v2/articles/${id}?_embed`)
        .then(res => {
          const artworks23 = res.data;
          // this.setState({ artworks });
          setArticle(artworks23);
         console.log(artworks23);
        })
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="article-container">
      {article != "" ?
        
      <div className="article-content">
        <h2>{article.title.rendered}</h2>
        <div> <img src={article._embedded['wp:featuredmedia'][0].source_url} />  </div>
        <p>{article.description}</p>
    <p>
      <strong>Author:</strong>  {article._embedded.author.map(artist => <span>{artist.name} </span>)} 
    </p>
    <p>{window.Date(article.date)}</p>
    <div dangerouslySetInnerHTML={{__html: article.content.rendered}} />
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed et mattis odio. Suspendisse potenti. Proin at elit vel
          justo ultrices fermentum vel sed nunc.
        </p> */}
        <div className="article-actions">
          <button onClick={handleLike}>Like ({likes})</button>
        </div>
        <div className="article-comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button style={{marginTop:20}} type="submit">Submit</button>
          </form>
        </div>
      </div>
      :
      <></>
          }
    </div>
  );
};

export default Article;
