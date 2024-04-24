// components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ mt: 4, mb: 2 }}>
          &copy; 2024 Your Assurance Service
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
