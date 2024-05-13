import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import "./AcheterAssurance.css"
import Modal from '../../../components/Modal/Modal';
import BoutiqueOrder from '../BoutiqueOrder/BoutiqueOrder';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import { AppContext } from '../../../App';


function AcheterAssurance() {
  const { sharedObject , setSharedObject } = useContext(AppContext);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
  console.log("sharedObject",sharedObject["contracts"])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
   const toggleOrderModal = () => {
    setIsModalOrderOpen(!isModalOrderOpen);
  };

     const [formData, setFormData] = useState({
    boutiqueTitle: '',
    description: '',
    contractType: '',
    pricePerDay: '',
    theftProtection: false,
    termsOfContract: '',
    firstName: '',
    lastName: '',
    email: '',
    startDate: '',
    endDate: '',
     });
    
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    };

    const handleOrder = () => {
      toggleOrderModal()
      setSharedObject({...sharedObject , contracts : [...sharedObject.contracts,{ contract: formData, product: location.state }]})
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log("formData" , formData);
    console.log("location" , location)
    
    toggleModal()
  };
  return (
   <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="boutiqueTitle">Boutique Title</label>
        <input
          type="text"
          id="boutiqueTitle"
          name="boutiqueTitle"
          value={formData.boutiqueTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={`Acheter une assurance pour ${formData.boutiqueTitle}`}
          onChange={handleChange}
          required
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="contractType">Contract Type</label>
        <select
          id="contractType"
          name="contractType"
          value={formData.contractType}
          onChange={handleChange}
          required
        >
          <option value="">Select Contract Type</option>
          <option value="standard">Contract Assurance Standard</option>
          <option value="premium">Contract Assurance Premium</option>
          <option value="universal">Contract Assurance Universel</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="pricePerDay">Prix/Jour</label>
        <input
          type="number"
          id="pricePerDay"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="theftProtection">
          <input
            type="checkbox"
            id="theftProtection"
            name="theftProtection"
            checked={formData.theftProtection}
            onChange={handleChange}
          />
          Protection Vol
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="termsOfContract">Terms of Contract</label>
        <textarea
          id="termsOfContract"
          name="termsOfContract"
          value={formData.termsOfContract}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Nom</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Date Début</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">Date Fin</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" >Suivant</button>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal}> <BoutiqueOrder data={{ contract: formData, product: location.state }}  orderFunc={handleOrder} /></Modal>
            <Modal isOpen={isModalOrderOpen} toggleModal={toggleOrderModal}> <OrderConfirmation contract={{contract : formData }} /></Modal>
    </form>
  )
}

export default AcheterAssurance