import React from 'react';
import './BoutiqueOrder.css'; // Import CSS file for styling

const BoutiqueOrder = ({ data , orderFunc }) => {
    const product = data["product"]
    const contract = data["contract"]
  const boutiqueName = contract["boutiqueTitle"]; // Replace with the name of your boutique
  const productName = product["title"]; // Replace with the name of your product
  const productDescription = product["description"]; // Replace with the description of your product
  const productPrice = product["price"]; // Replace with the price of your product
  const startDate = new Date(contract["startDate"]);
    const endDate = new Date(contract["endDate"]);
    const assuranceUnitPrice = contract["pricePerDay"]
  const assurancePrice = assuranceUnitPrice * (endDate.getDate() - startDate.getDate()); // Replace with your assurance calculation logic

  const handlePayment = () => {
    // Handle payment logic here
      console.log("Payment processed successfully!");
      orderFunc()
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
