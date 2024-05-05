import React from 'react';
import './AteulierReparation.css'; // Importing the CSS file

function AtelierReparation(props) {
    return (
        <div>
            <div className='title'>
                <h1>Atelier de réparation</h1>
            </div>

            <div className="container-atelier-reparation">
                <div className="square">
                    <h2>Commande de réparation</h2>
                    <p>Marque: Samsung</p>
                    <p>Modèle: M315</p>
                    <p>Description: ...</p>
                </div>
                <button className="button">Marquer l'opération terminée</button>
            </div>
        </div>
    );
}

export default AtelierReparation;
