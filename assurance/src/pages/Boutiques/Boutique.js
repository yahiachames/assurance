import React , {useState , useContext} from 'react';
import "./Boutique.css"
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { AppContext } from '../../App';



const Boutique = (props) => {
 const { sharedObject } = useContext(AppContext);
  const navigate = useNavigate();
    const boutiques = sharedObject.data

  return   (
    <div className="electronic-boutiques">

      {boutiques.map((category, index) => (
        <div className="category" key={index}>
          
          {category.boutiques.map((boutique, idx) => (
            <div className="boutique-item" key={idx}>
              <img className="boutique-image" src={boutique.image} alt={boutique.title} />
              <h3>{boutique.title}</h3>
              <p>{boutique.description}</p>
              <Button onClick={() => navigate('/boutique_products', { state: boutique })} >Visit Boutique</Button>
    
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );

};



export default Boutique;