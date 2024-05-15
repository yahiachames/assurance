import React, { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
import './ajouter_reclamation.css'; // Import your CSS file for styling

const ReclamationForm = ({openModal,closeModal}) => {
  const [stolen, setStolen] = useState(false);
  const [description, setDescription] = useState('');

  const handleCancel = () => {
    // Add cancel logic here
    console.log('Cancel clicked');
    closeModal();
  };

  const handleSubmit = () => {
    // Add submit logic here
    console.log('Submit clicked');
    console.log('Stolen:', stolen);
    console.log('Description:', description);
    closeModal();
    
  };




  return (
    <div className="reclamation-form">
      <h4>Ajouter Réclamation</h4>
      <Checkbox
        checked={stolen}
        onChange={(e) => setStolen(e.target.checked)}
        color="primary"
      />
      <span>Volé</span>
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="button-container">
        <Button variant="contained" onClick={handleCancel}>Annuler</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Valider</Button>
      </div>
    </div>
  );
};

export default ReclamationForm;
