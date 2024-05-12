import React , {useState} from 'react';
import { Button} from '@mui/material';
import './Reclamation.css'; // Import the CSS file
import Modal from '../../components/Modal/Modal';
import ReclamationForm from './popup_ajouter reclamation/ajouter reclamation';




const ProductBox = ({ajouter_function}) => {
 const handel_ajouer_function = () => {
  ajouter_function();
 }

  return (
    <div className="product-box">
      <div className="product-details">
        <div className="detail-item">
          <span>Marque:</span>
          <span>Samsung</span>
        </div>
        <div className="detail-item">
          <span>Modèle:</span>
          <span>M315</span>
        </div>
        <div className="detail-item">
          <span>Numéro de série:</span>
          <span>123456789</span>
        </div>
        <div className="detail-item">
          <span>Valide depuis:</span>
          <span>01/01/2022</span>
        </div>
        <div className="detail-item">
          <span>Valide jusqu'à:</span>
          <span>01/01/2023</span>
        </div>
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handel_ajouer_function} >Ajouter réclamation</Button>
        <Button variant="contained" color="secondary">Consulter réclamation</Button>
      </div>
      
    </div>
  );
};



const Reclamation = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true)
    //setShowModal(true);
  };
  
  const handleCloseModal = () => {
   // setShowModal(false);
    setIsModalOpen(false)

  };

  return (
    <div>
    <div className='.title_reclamation'>
                <h1>Vos Contrats</h1>
            </div>

      <div className="product-boxes-container">
        <ProductBox ajouter_function={toggleModal}/>
        <ProductBox ajouter_function={toggleModal}/>
        <ProductBox ajouter_function={toggleModal}/>
        {/* Add more ProductBox components as needed */}
      </div>
      
      
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <ReclamationForm closeModal= {handleCloseModal} openModal= {handleOpenModal}/>
        </Modal>
      

      </div>
    
  );
};

export default Reclamation;
