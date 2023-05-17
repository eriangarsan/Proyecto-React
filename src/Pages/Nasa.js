import React, { useState, useEffect } from 'react';
import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';
function Nasa() {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => response.json())
      .then((data) => {
        setImage(data.url);
      })
      .catch((error) => {
        console.error('Error al obtener la imagen de la API de NASA:', error);
      });
  }, []);

  return (
    <div>
       <Nav />
       <img src={image} alt="Imagen de NASA" />;
       <Footer/>
    </div>
  )
  
}

export default Nasa;
