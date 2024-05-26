import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Theory from './Theory';
import Design from './Design';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/design">Design</Link>
          </div>
          <div className="logo"></div>
          <div className="nav-links">
            <Link to="/theory">Theory</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/design" element={<Design />} />
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
