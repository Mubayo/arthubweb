import React, { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import '../assets/css/artworks.css';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };

    fetchData();
  }, []);

  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="artworks-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="artworks-list">
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Artworks;
