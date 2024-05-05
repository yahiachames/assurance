import React from 'react';
import "./Boutique.css"
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';

const Boutique = (props) => {
  const navigate = useNavigate();
    const boutiques = [
  {
    category: 'Computers',
    boutiques: [
      {
        title: 'Tech Haven',
        link: '/boutique_products', // Boutique link
        image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OJJRFWRXHJUXGZ47ED7KPNRDXU.JPG&w=1200', // Boutique image
        description: "A portable computer that is suitable for use",
        products: [
          {
            title: 'Laptop',
            description: 'A portable computer that is suitable for use while traveling and on the go.',
            link: 'https://example.com/laptop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_Nokia_3310.png/800px-%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_Nokia_3310.png', // Product image
            marque: 'Example Marque',
            price: '$999',
            seriesNumber: 'THL1001'
          },
          {
            title: 'Desktop PC',
            description: 'A personal computer designed for regular use at a single location.',
            link: 'https://example.com/desktop-pc',
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-REF-1029637-240408_DER-32be5d1c-08d3-4754-9d53-430504363d78.jpg;maxHeight=350;maxWidth=1000', // Product image
            marque: 'Example Marque',
            price: '$1499',
            seriesNumber: 'THD2001'
          },
          {
            title: 'Tablet',
            description: 'A handheld device with a touchscreen display, typically larger than a smartphone but smaller than a laptop.',
            link: 'https://example.com/tablet',
            image: 'https://example.com/tablet.jpg', // Product image
            marque: 'Example Marque',
            price: '$599',
            seriesNumber: 'THT3001'
          }
        ]
      }
    ]
  },
  {
    category: 'Phones',
    boutiques: [
      {
        title: 'Mobile Galaxy',
        link: 'https://example.com/mobile-galaxy', // Boutique link
        image: 'https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323', // Boutique image
        description: "A mobile phone with advanced features",
        products: [
          {
            title: 'Smartphone',
            description: 'A mobile phone with advanced features like internet connectivity, touchscreen interface, and various apps.',
            link: 'https://example.com/smartphone',
            image: 'https://example.com/smartphone.jpg', // Product image
            marque: 'Example Marque',
            price: '$799',
            seriesNumber: 'MGS1001'
          },
          {
            title: 'Feature Phone',
            description: 'A mobile phone that has fewer features than a smartphone but is simpler to use.',
            link: 'https://example.com/feature-phone',
            image: 'https://example.com/feature-phone.jpg', // Product image
            marque: 'Example Marque',
            price: '$199',
            seriesNumber: 'MGP2001'
          },
          {
            title: 'Accessories',
            description: 'Various accessories for mobile phones, including cases, chargers, and screen protectors.',
            link: 'https://example.com/accessories',
            image: 'https://example.com/accessories.jpg', // Product image
            marque: 'Example Marque',
            price: '$29',
            seriesNumber: 'MGA3001'
          }
        ]
      }
    ]
  },
  {
    category: 'Home Appliances',
    boutiques: [
      {
        title: 'Appliance World',
        link: 'https://www.zara.com/tn/', // Boutique link
        image: 'https://mtsplus.tn/2543-home_default/lave-linge-frontale-samsung-7kg-inox.jpg', // Boutique image
        description: "A large electrical appliance designed to keep food and drinks cool",
        products: [
          {
            title: 'Refrigerator',
            description: 'A large electrical appliance designed to keep food and drinks cool.',
            link: 'https://example.com/refrigerator',
            image: 'https://example.com/refrigerator.jpg', // Product image
            marque: 'Example Marque',
            price: '$1299',
            seriesNumber: 'AWR1001'
          },
          {
            title: 'Washing Machine',
            description: 'A machine used for washing clothes automatically.',
            link: 'https://example.com/washing-machine',
            image: 'https://example.com/washing-machine.jpg', // Product image
            marque: 'Example Marque',
            price: '$899',
            seriesNumber: 'AWW2001'
          },
          {
            title: 'Microwave Oven',
            description: 'An electric oven that heats and cooks food by exposing it to electromagnetic radiation.',
            link: 'https://example.com/microwave-oven',
            image: 'https://example.com/microwave-oven.jpg', // Product image
            marque: 'Example Marque',
            price: '$199',
            seriesNumber: 'AWM3001'
          }
        ]
      }
    ]
  }
  // Add more categories and boutiques as needed
];

  return   (
    <div className="electronic-boutiques">

      {boutiques.map((category, index) => (
        <div className="category" key={index}>
          
          {category.boutiques.map((boutique, idx) => (
            <div className="boutique-item" key={idx}>
              <img className="boutique-image" src={boutique.image} alt={boutique.title} />
              <h3>{boutique.title}</h3>
              <p>{boutique.description}</p>
              <Button onClick={() => navigate('/boutique_products',{state:boutique})} >Visit Boutique</Button>
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );

};



export default Boutique;