// components/DescriptionSection.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const DescriptionSection = () => {
  return (
    <section className="description">
    <h2>Why Choose Us?</h2>
    <p>We offer a wide range of insurance products to fit your needs, from home and auto insurance to life and health insurance. Our experienced team is dedicated to providing you with the best possible service.</p>
    <ul className="benefits">
      <li><i className="material-icons">check</i> Reliable coverage</li>
      <li><i className="material-icons">check</i> Competitive rates</li>
      <li><i className="material-icons">check</i> Excellent customer service</li>
    </ul>
  </section>
  );
}

export default DescriptionSection;
