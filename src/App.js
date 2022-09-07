import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './components/AboutUs/Aboutus';
import Books from './components/Books/Books';
import ErrorPage from './components/errorpage/ErrorPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ReadingList from './components/ReadingList/ReadingList';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<Aboutus />}/>
    <Route path="/book" element={<Books />}/>
    <Route path="/read" element={<ReadingList />}/>
    <Route path="/review" element={<Reviews />}/>
    <Route path ='*' element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
