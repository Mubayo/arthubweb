// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import ArtworkPage from './components/ArtworkPage';
import ArticlesPage from './components/ArticlesPage';
import SearchPage from './components/SearchPage';
import BookmarksPage from './components/BookmarksPage';
import ContactForm from './components/ContactForm';
import Register from './components/Register';
import Login from './components/Login';
import About from './pages/About';
import Article from './pages/Article';
import Artworks from './pages/Artworks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'; 


const App = () => {
  


  return (
    <Router>
      <Header/>
      <div style={{minHeight: window.innerHeight-200,}}>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/artist" element={<ArtistPage/>} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/artworks" element={<Artworks/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/bookmarks" element={<BookmarksPage/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/article/:id" element={<Article/>} />
      </Routes>
      </div>


      
      <Footer style={{}} />
    </Router>
  );
};

export default App;
