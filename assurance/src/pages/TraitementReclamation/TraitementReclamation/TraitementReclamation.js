// TraitementReclamation.js

import React from 'react';
import './TraitementReclamation.css';
import Traitement from '../Traitment/Traitement';


const TraitementReclamation = ({  }) => {
    const traitements = [
        {
          assurance: "Assurance A",
          reclamations: [
            {
              title: "Réclamation 1",
              description: "Description de la réclamation 1",
              creationDate: "2024-05-14",
            },
            {
              title: "Réclamation 2",
              description: "Description de la réclamation 2",
              creationDate: "2024-05-15",
            },
          ],
        },
        {
          assurance: "Assurance B",
          reclamations: [
            {
              title: "Réclamation 3",
              description: "Description de la réclamation 3",
              creationDate: "2024-05-16",
            },
            {
              title: "Réclamation 4",
              description: "Description de la réclamation 4",
              creationDate: "2024-05-17",
            },
          ],
        },
      ];
  return (
    <div className="traitement-reclamation">
         <div className="title">assurance</div>
      <div className="subtitle">Réclamations non traitées</div>
      <div className="traitements-container">  
        {traitements.length > 0 ? (traitements.map((traitement, index) => (
      <Traitement key={index} assurance={traitement.assurance} reclamations={traitement.reclamations} />
    ))) : <div className="subtitle">Aucune réclamation non traités</div>}</div>

  </div>
  );
};

export default TraitementReclamation;
