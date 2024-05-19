import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Environmental Conservation Foundation</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
