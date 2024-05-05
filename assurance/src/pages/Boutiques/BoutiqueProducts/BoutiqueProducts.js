import React , {useState} from 'react'
import "./BoutiqueProducts.css"
import {useLocation} from 'react-router-dom';
import Carousel from '../../../components/carousel/Carousel';
import { Button } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';


const ProductDetails = ({ product, index }) => {
    const navigate = useNavigate();
  return ( <div key={index} className="product-item">
             
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="mark-field">Mark: {product.mark}</div>
              <div className="model-field">Model: {product.model}</div>
              <div className="price-field">Price: {product.price}</div>
    <div className="series-number">Series Number: {product.seriesNumber}</div>
    <Button  color='primary' onClick={() => navigate('/',{state:"hello"})} >Suivant</Button>
            </div>)
}


function BoutiqueProducts(props) {
  const location = useLocation();
  const products = location.state.products
    const [currentIndex, setCurrentIndex] = useState(0);

  return ( <div className='container'>
    <Carousel data={products} Component={ProductDetails} />
  
   </div>  )

}

export default BoutiqueProducts