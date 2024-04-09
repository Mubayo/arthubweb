import React from 'react';
import '../assets/css/artworks.css';
import { Link, useNavigation } from 'react-router-dom';

const ArtworkCard = ({ artwork }) => {
  var excerpt;
  if (artwork.excerpt.rendered.length > 100) {
    const truncatedContent = artwork.excerpt.rendered.substring(0, 100) + '...';
    excerpt = truncatedContent;
} else {
    excerpt = artwork.excerpt.rendered;
}
  return (
    <div className="artwork-card">
    <Link to={"/artwork/"+artwork.id}>
    {/* <Link to={artwork.link}> */}
    
        <div> <img src={artwork._embedded['wp:featuredmedia'][0].source_url} />  </div>
      <div className="artwork-details">
        <h3>{artwork.title.rendered}</h3>
        <p>{artwork.description}</p>
        <p>
          <strong>Artists:</strong>  {artwork.acf.artist.map(artist => <span>{artist.post_title},</span>)} 
        </p>
        <p>
          {/* <strong>Related Text:</strong>  */}
          {/* <div dangerouslySetInnerHTML={{__html: artwork.excerpt.rendered}} /> */}
          <div dangerouslySetInnerHTML={{__html: excerpt}} />
        </p>
        <div> Categories: </div>
                   {/*As there can be multiple categories, we use the map function again*/}
                    {artwork._embedded['wp:term'].map(term => 
                      term.map(t => <span>{t.name} </span>))}  
      </div>
      </Link>
    </div>
  );
};

export default ArtworkCard;
