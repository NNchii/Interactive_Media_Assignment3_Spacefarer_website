import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Theory from './pages/Theory';
import Design from './pages/Design';
import NetArt from './pages/NetArt';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Using the Navbar component */}
        <Routes>
          <Route path="/Interactive_Media_Assignment3_Spacefarer_website/" element={<Homepage />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/design" element={<Design />} />
          <Route path="/netart" element={<NetArt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
