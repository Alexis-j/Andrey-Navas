import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    let timeout;
    if (showMenu) {
      setShowLinks(true);
      let delay = 0;

      // Intervalo de medio segundo (500 milisegundos) para cada enlace
      const links = document.querySelectorAll('.menu.show li');
      links.forEach((link, index) => {
        delay += 150; // Aumenta el retraso para cada enlace
        timeout = setTimeout(() => {
          link.style.opacity = 1;
        }, delay);
      });
    } else {
      setShowLinks(false);
      const links = document.querySelectorAll('.menu.show li');
      links.forEach((link) => {
        link.style.opacity = 0;
      });
    }

    return () => clearTimeout(timeout);
  }, [showMenu]);

  return (
    <nav className="additional-links">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/about">About Me</a></li>
        <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/contact">Wild Life</a></li>
        <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/contact">Landscape</a></li>
        <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/contact">People</a></li>
      </ul>
    </nav>
  );
}
