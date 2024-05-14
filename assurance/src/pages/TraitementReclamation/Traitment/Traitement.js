// Traitement.js

import React from 'react';
import './Traitement.css';

const Traitement = ({ assurance, reclamations }) => {
  return (
    <>
     
      {reclamations.map((reclamation, idx) => (
        <div className="reclamation-box" key={idx}>
          <div className="reclamation-title">{reclamation.title}</div>
          <div className="reclamation-description">{reclamation.description}</div>
          <div className="reclamation-creation-date">Date de création: {reclamation.creationDate}</div>
          <div className="reclamation-details">
            <label htmlFor={`vol-${idx}`}>C'est un vol</label>
            <input type="checkbox" id={`vol-${idx}`} />
            <div>
              <label htmlFor={`remboursable-${idx}`}>Remboursable:</label>
              <input type="number" id={`remboursable-${idx}`} />
            </div>
          </div>
          <div className="buttons">
            <button>Reparer</button>
            <button>Rembourser</button>
            <button>Rejeter</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Traitement;