import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Theory from './components/Theory';
import Design from './components/Design';
import NetArt from './components/NetArt'; // Import the NetArt component
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

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
            <Link to="/netart">Net Art</Link> {/* Updated link */}
          </div>
        </div>
          <Routes>
            <Route path="/Interactive_Media_Assignment3_Spacefarer_website/" element={<Homepage />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/design" element={<Design />} />
            <Route path="/netart" element={<NetArt />} /> {/* Added route */}
            {/* Add other routes as necessary */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
