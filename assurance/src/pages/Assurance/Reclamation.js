import React , {useState, useContext} from 'react';
import {Button} from '@mui/material';
import './Reclamation.css'; // Import the CSS file
import Modal from '../../components/Modal/Modal';
import ReclamationForm from './ajouter_reclamation/ajouter_reclamation';
import { AppContext } from '../../App';
import Consulter_reclamation from './consulter_reclamation/consulter_reclamation';




const ProductBox = ({ajouter_function, data}) => {
  console.log(data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConsulterModalOpen, setIsConsulterModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
   
  const handleOpenModal = () => {
    handleCloseConsulterModal()
    setIsModalOpen(true)
    //setShowModal(true);
  };
  
  const handleCloseModal = () => {
   // setShowModal(false);
    setIsModalOpen(false)

  };

  const handleOpenConsulterModal = () => {
    handleCloseModal()
      setIsConsulterModalOpen(true)
  }
  const handleCloseConsulterModal = () => {
     setIsConsulterModalOpen(false)
  }

 const toggleConsulterModal = () => {
    setIsConsulterModalOpen(!isConsulterModalOpen)
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
        <Button variant="contained" color="primary" onClick={handleOpenModal} >Ajouter réclamation</Button>
        <Button variant="contained" color="secondary" onClick={handleOpenConsulterModal}>Consulter réclamation</Button>
      </div>
      
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <ReclamationForm closeModal= {handleCloseModal} openModal= {handleOpenModal}/>
        </Modal>
      
  <Modal isOpen={isConsulterModalOpen} toggleModal={toggleConsulterModal}>
          <Consulter_reclamation closeModal= {handleCloseModal} openModal= {toggleConsulterModal}/>
        </Modal>
    </div>
  );
};



const Reclamation = () => {
  const { sharedObject , setSharedObject } = useContext(AppContext);
  console.log(sharedObject, "test_sharedObject")
  let contracts = sharedObject["contracts"]
  contracts = [
    {
        "contract": {
            "boutiqueTitle": "dffdsf",
            "description": "",
            "contractType": "standard",
            "pricePerDay": "4",
            "theftProtection": true,
            "termsOfContract": "dffs",
            "firstName": "chameseddine",
            "lastName": "Yahia",
            "email": "yahiachames@gmail.com",
            "startDate": "2024-05-15",
            "endDate": "2024-05-17"
        },
        "product": {
            "title": "Laptop",
            "description": "A portable computer that is suitable for use while traveling and on the go.",
            "link": "https://example.com/laptop",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_Nokia_3310.png/800px-%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_Nokia_3310.png",
            "marque": "Example Marque",
            "price": 999,
            "seriesNumber": "THL1001"
        }
    }
]
  
  return (
    <div>
    <div className='.title_reclamation'>
                <h1>Vos Contrats</h1>
            </div>

      <div className="product-boxes-container">
        { 
        contracts.map((contract,index) => <ProductBox data = {contract}/>) 
        }
      </div>
      
        
      </div>
    
  );
};

export default Reclamation;
