import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover.js';
import About from './pages/About.js';
import Search from './pages/Search.js';
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';
import Wrapper from './components/Wrapper/index.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/discover" element={<Discover/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
