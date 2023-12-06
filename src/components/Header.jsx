import React, { useState, useEffect } from 'react';
import '../styles/botones.css';
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
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 4s ease-in-out',
          }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        <button className={`boton-carusel ${currentImageIndex === 0 ? 'active' : ''}`} onClick={() => changeImage(0)}></button>
        <button className={`boton-carusel ${currentImageIndex === 1 ? 'active' : ''}`} onClick={() => changeImage(1)}></button>
        <button className={`boton-carusel ${currentImageIndex === 2 ? 'active' : ''}`} onClick={() => changeImage(2)}></button>
      </div>
    </header>
  );
}
