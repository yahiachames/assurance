// components/HeroSection.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find peace of mind with our <br />  reliable insurance solutions.</h1>
        <p>Get a quote today and protect what matters most.</p>
        <button>Get a Quote</button>
      </div>
      <img src="hero-image.jpg" alt="Hero Image" />
    </section>
  );
}

export default HeroSection;
