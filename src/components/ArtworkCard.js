import React from 'react';
import '../assets/css/artworks.css';
import { Link, useNavigation } from 'react-router-dom';

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="artwork-card">
    <Link to={`/artwork/${artwork.id}`}>
      <img src={artwork.imageUrl} alt={artwork.title} />
      <div className="artwork-details">
        <h3>{artwork.title}</h3>
        <p>{artwork.description}</p>
        <p>
          <strong>Artist:</strong> {artwork.artist}
        </p>
        <p>
          <strong>Related Text:</strong> {artwork.relatedText}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default ArtworkCard;
