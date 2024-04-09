import React, { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import axios from 'axios';
import '../assets/css/artworks.css';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [artworks2, setArtworks2] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulated data fetch or API call to get the list of artworks
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      try {
        // Simulated data
        // const response = await fetch('/api/artworks');
        // const data = await response.json();
        
        axios.get('https://dh.southspace.xyz/wp-json/wp/v2/artwork?_embed')
        .then(res => {
          const artworks23 = res.data;
          // this.setState({ artworks });
          setArtworks(artworks23);
        // setArtworks2(artworks23)
        /* 
        For debugging and locating required information in the feed:
        prints the full feed result to the browser console
        */
        console.log(artworks2);
      })
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };

    fetchData();
  }, []);

  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
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
