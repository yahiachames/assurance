import React from 'react';
import "./Boutique.css"
import { Link } from 'react-router-dom'; //IMPORTIT HEDHI BECH NNAJEM NINKI DES PAGES

const  Boutique = (props) => {
     const boutiques = [
  {
    category: 'Computers',
    boutiques: [
      {
        title: 'Tech Haven',
        image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OJJRFWRXHJUXGZ47ED7KPNRDXU.JPG&w=1200', // Boutique image
        description : "A portable computer that is suitable for use" , 
        products: [
          {
            title: 'Laptop',
            description: 'A portable computer that is suitable for use while traveling and on the go.',
            link: 'https://example.com/laptop',
            image: 'https://example.com/laptop.jpg' // Product image
          },
          {
            title: 'Desktop PC',
            description: 'A personal computer designed for regular use at a single location.',
            link: 'https://example.com/desktop-pc',
            image: 'https://example.com/desktop-pc.jpg' // Product image
          },
          {
            title: 'Tablet',
            description: 'A handheld device with a touchscreen display, typically larger than a smartphone but smaller than a laptop.',
            link: 'https://example.com/tablet',
            image: 'https://example.com/tablet.jpg' // Product image
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
        image: 'https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323', // Boutique image
        description : "A mobile phone with advanced features" , 
        products: [
          {
            title: 'Smartphone',
            description: 'A mobile phone with advanced features like internet connectivity, touchscreen interface, and various apps.',
            link: 'https://example.com/smartphone',
            image: 'https://example.com/smartphone.jpg' // Product image
          },
          {
            title: 'Feature Phone',
            description: 'A mobile phone that has fewer features than a smartphone but is simpler to use.',
            link: 'https://example.com/feature-phone',
            image: 'https://example.com/feature-phone.jpg' // Product image
          },
          {
            title: 'Accessories',
            description: 'Various accessories for mobile phones, including cases, chargers, and screen protectors.',
            link: 'https://example.com/accessories',
            image: 'https://example.com/accessories.jpg' // Product image
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
        image: 'https://mtsplus.tn/2543-home_default/lave-linge-frontale-samsung-7kg-inox.jpg', // Boutique image
        description : "A large electrical appliance designed to keep food and drinks cool" , 
        products: [
          {
            title: 'Refrigerator',
            description: 'A large electrical appliance designed to keep food and drinks cool.',
            link: 'https://example.com/refrigerator',
            image: 'https://example.com/refrigerator.jpg' // Product image
          },
          {
            title: 'Washing Machine',
            description: 'A machine used for washing clothes automatically.',
            link: 'https://example.com/washing-machine',
            image: 'https://example.com/washing-machine.jpg' // Product image
          },
          {
            title: 'Microwave Oven',
            description: 'An electric oven that heats and cooks food by exposing it to electromagnetic radiation.',
            link: 'https://example.com/microwave-oven',
            image: 'https://example.com/microwave-oven.jpg' // Product image
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
              <Link to="assurance\src\pages\Boutiques\productDescription\ProductDescription.js">Visit Boutique</Link> {/* Use Link instead of anchor tag */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

};



export default Boutique;