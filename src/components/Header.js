import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component

// onSearch={handleSearch} onClearFilters={handleClearFilters}
const Header = ({ onSearch, onClearFilters }) => {
    const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResults = filterResults();
  const history = useNavigate(); // Initialize useHistory

  function filterResults() {
    // ... (same as before)
  }

  const handleSearch = (query) => {

    setSearchQuery(query);
    history(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

//   const openSearchPopup = () => {
//     setShowSearchPopup(true);
//   };

//   const closeSearchPopup = () => {
//     setShowSearchPopup(false);
//   };

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const openRegister = () => {
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };
  return (
    <div>
      <Navbar bg="danger" variant="danger" expand="lg" style={{color:"black"}}>
        <Container className='justify-content-between'>
          <Navbar.Brand href="/" className='brand mr-2' style={{fontSize:"30px", color:"white"}}>Routing Diasporic Histories</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between" style={{flexGrow:0}}>
            {/* Navigation links */}
            <Nav className=" menu">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              {/* <Nav.Link href="/artist">Profile</Nav.Link> */}
              <Nav.Link className='menu-item' href="/artworks">Artworks</Nav.Link>
              <Nav.Link className='menu-item' href="/articles">Articles</Nav.Link>
              <Nav.Link className='menu-item' href="/about">About RDH</Nav.Link>
              <Nav.Link className='menu-item' href="/contact">Contact</Nav.Link>
              {/* <Nav.Link className='menu-item' href="https://dh.southspace.xyz/blog">Latest News</Nav.Link> */}
              <Nav.Link className='menu-item' href='https://dh.southspace.xyz/wp-login.php'>Login</Nav.Link>
              <Nav.Link className='menu-item' href='https://dh.southspace.xyz/wp-login.php?action=register'>Register</Nav.Link>
              {/* Add other navigation links */}
            </Nav>

            {/* Social media icons */}
            {/* <Nav> */}
              {/* <Nav.Link href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
              <Nav.Link href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></Nav.Link> */}
              {/* Add more social media icons as needed */}
            {/* </Nav> */}
            {/* <Form className='inline'>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            //   onChange={(e) => handleSearch(e.target.value)
            // }
            />
            <Button variant="outline-success" 
            // onClick={onClearFilters}
            onClick={handleClearFilters}
            >Clear Filters</Button>
          </Form> */}

          {/* Login and Register buttons */}
          {/* <Nav> */}
              {/* <Nav.Link className='menu-item' href='https://dh.southspace.xyz/wp-login.php'>Login</Nav.Link>
              <Nav.Link className='menu-item' href='https://dh.southspace.xyz/wp-login.php?action=register'>Register</Nav.Link> */}
              {/* <Button variant="outline-primary" onClick={openLogin} className='mx-auto'>Login</Button>
              <Button variant="primary" onClick={openRegister}>Register</Button> */}
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
