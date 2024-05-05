import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./ProductDescription.css";

function ProductDescription() {
    return (
        <div className="container">
            <h1>Boutique Smart Phone</h1>
            <div className="product-details">
                <h2>Choisir un produit</h2>
                <div className="product-info">
                    <img src="product_image_url" alt="Product Image" />
                    <div className="product-specs">
                        <p>Couleur: </p>
                        <p>RAM: </p>
                        <p>Marque: </p>
                        <p>Modèle: </p>
                        <p>Prix: </p>
                        <p>Numéro de série: </p>
                    </div>
                </div>
                <div className="navigation">
                    <div className="circle"></div>
                    <div className="arrow">→</div>
                </div>
            </div>
            <Link to="/next-page">
                <button>Suivant</button>
            </Link>
        </div>
    );
}

export default ProductDescription;
