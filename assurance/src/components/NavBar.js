// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from './HeroSection';
import Footer from './Footer';
import SignupForm from './SignupForm';
import DescriptionSection from './DescriptionSection';


const Navbar = () => {
  // State for managing dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Open dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
  
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Assurance Service
        </Typography>
        <Button color="inherit" component={RouterLink} to="/menu">Menu</Button>
        <Button color="inherit" component={RouterLink} to="/acceuil">Acceuil</Button>
        <Button color="inherit" component={RouterLink} to="/boutique">Boutique</Button>
        <Button color="inherit" component={RouterLink} to="/police">Police</Button>
        <Button color="inherit" component={RouterLink} to="/atelier_reparation">Atelier Réparation</Button>
        <Button
          color="inherit"
          aria-controls="assurance-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Assurance
        </Button>
        <Menu
          id="assurance-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={RouterLink} to="/reclamation" onClick={handleClose}>Réclamation</MenuItem>
          <MenuItem component={RouterLink} to="/gestion_contrat" onClick={handleClose}>Gestion de Contrat</MenuItem>
          <MenuItem component={RouterLink} to="/traitement_reclamation" onClick={handleClose}>Traitement de Réclamation</MenuItem>
        </Menu>
      </Toolbar>

    </AppBar>
 
  </>
  );
}

export default Navbar;
