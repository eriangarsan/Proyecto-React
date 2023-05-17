import React, { useState, useEffect } from 'react';
import '../assets/css//Clock.css';
import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="clock">
      <Nav />
      <h2>Hora actual:</h2>
      <p className="time">{formattedTime}</p>
      <Footer/>
    </div>
  );
};

export default Clock;