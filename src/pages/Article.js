import React, { useState } from 'react';
import '../assets/css/article.css';

const Article = () => {
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

  return (
    <div className="article-container">
      <div className="article-content">
        <h2>Article Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed et mattis odio. Suspendisse potenti. Proin at elit vel
          justo ultrices fermentum vel sed nunc.
        </p>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Article;
