import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Tools from './pages/Tools';
import Community from './pages/Community';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes> {/* Updated */}
            <Route path="/" element={<Home />} /> {/* Updated */}
            <Route path="/articles" element={<Articles />} /> {/* Updated */}
            <Route path="/tools" element={<Tools />} /> {/* Updated */}
            <Route path="/community" element={<Community />} /> {/* Updated */}
            <Route path="/events" element={<Events />} /> {/* Updated */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
