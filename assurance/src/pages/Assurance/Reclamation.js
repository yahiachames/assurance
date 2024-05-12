import React , {useState, useContext} from 'react';
import {Button} from '@mui/material';
import './Reclamation.css'; // Import the CSS file
import Modal from '../../components/Modal/Modal';
import ReclamationForm from './popup_ajouter reclamation/ajouter reclamation';
import { AppContext } from '../../App';




const ProductBox = ({ajouter_function, data}) => {
console.log(data)
 const handel_ajouer_function = () => {
  ajouter_function();
 }

  return (
    <div className="product-box">
      <div className="product-details">
        <div className="detail-item">
          <span>Marque:</span>
          <span>{data["product"]["marque"]}</span>
        </div>
        <div className="detail-item">
          <span>Modèle:</span>
          <span>{data["product"]["title"]}</span>
        </div>
        <div className="detail-item">
          <span>Numéro de série:</span>
          <span>{data["product"]["seriesNumber"]}</span>
        </div>
        <div className="detail-item">
          <span>Valide depuis:</span>
          <span>{data["contract"]["startDate"]}</span>
        </div>
        <div className="detail-item">
          <span>Valide jusqu'à:</span>
          <span>{data["contract"]["endDate"]}</span>
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
  const { sharedObject , setSharedObject } = useContext(AppContext);
  console.log(sharedObject, "test_sharedObject")
const contracts = sharedObject["contracts"]
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
        { 
        contracts.map((contract,index) => <ProductBox ajouter_function={toggleModal} data = {contract}/>) 
        }
      </div>
      
        
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <ReclamationForm closeModal= {handleCloseModal} openModal= {handleOpenModal}/>
        </Modal>
      

      </div>
    
  );
};

export default Reclamation;
