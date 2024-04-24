
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import backgroundImg from '../assets/landingpage.jpg' // Import your background image


function Acceuil(props) {
    return  (
        <Box
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative', // Added position relative to position the overlay
          }}
        >
          {/* Overlay with dark transparent background */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 4 }}>
                Welcome to Assurance Service
              </Typography>
              <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ex nec justo lobortis,
                id tempus lacus sodales. Mauris quis placerat dui. Vestibulum auctor ligula vel nisi tincidunt,
                vel ultrices eros feugiat.
              </Typography>
              <Button variant="contained" color="primary" size="large" fullWidth>
                Sign Up
              </Button>
            </Container>
          </Box>
        </Box>
      );
    
}

export default Acceuil;