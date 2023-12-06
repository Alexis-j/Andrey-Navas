import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="additional-links">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><a href="/about">About Me</a></li>
        <li><a href="/contact">Wild Life</a></li>
        <li><a href="/contact">Landscape</a></li>
        <li><a href="/contact">People</a></li>
      </ul>
    </nav>
  );
}
