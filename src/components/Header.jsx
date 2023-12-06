import React, { useState, useEffect } from 'react';
import '../styles/botones.css';
import '../styles/header.css';
import hero1 from '../img/hero1.jpg';
import hero2 from '../img/hero2.jpg';
import hero3 from '../img/hero3.jpg';

export default function Header() {
  const [images, setImages] = useState([hero1, hero2, hero3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="header-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`header-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
          />
      ))}
      <div className="botones-container">
        <button className={`boton-carusel ${currentImageIndex === 0 ? 'active' : ''}`} onClick={() => changeImage(0)}></button>
        <button className={`boton-carusel ${currentImageIndex === 1 ? 'active' : ''}`} onClick={() => changeImage(1)}></button>
        <button className={`boton-carusel ${currentImageIndex === 2 ? 'active' : ''}`} onClick={() => changeImage(2)}></button>
      </div>
    </header>
  );
}
