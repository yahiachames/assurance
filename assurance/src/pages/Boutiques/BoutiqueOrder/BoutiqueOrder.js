import React from 'react';
import './BoutiqueOrder.css'; // Import CSS file for styling

const BoutiqueOrder = () => {
  const boutiqueName = "My Boutique"; // Replace with the name of your boutique
  const productName = "Product Name"; // Replace with the name of your product
  const productDescription = "Product Description"; // Replace with the description of your product
  const productPrice = 100; // Replace with the price of your product
  const startDate = new Date("2024-05-12");
  const endDate = new Date("2024-05-19");
  const assurancePrice = productPrice * (endDate.getDate() - startDate.getDate()); // Replace with your assurance calculation logic

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Payment processed successfully!");
  };

  const handleCommand = () => {
    // Handle command logic here
    console.log("Command executed!");
  };

  const total = productPrice + assurancePrice;

  return (
    <div className="boutique-page">
      <h1>{boutiqueName}</h1>
      
      <div className="product-details">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <p>Price: ${productPrice}</p>
      </div>

      <div className="services-section">
        <h2>Services</h2>
        <p>Assurance:</p>
        <p>Price: ${assurancePrice}</p>
      </div>

      <div className="total-section">
        <h2>Total</h2>
        <p>Total Price: ${total}</p>
      </div>

      <div className="button-container">
        <button className="payment-button" onClick={handlePayment}>Commander</button>
        
      </div>
    </div>
  );
};

export default BoutiqueOrder;
