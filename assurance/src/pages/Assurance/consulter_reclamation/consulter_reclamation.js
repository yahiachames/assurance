import React from 'react'
import "./consulter_reclamation.css"

function Consulter_reclamation() {
  return (
      <div className="page-container">
      <h1>Assurance</h1>
      <h2>Reclamations</h2>
      <h3>Reclamations des contrats selectionnés</h3>
      <div className="box">
        <h3>Accident</h3>
        <p>Date de creation : 12/01/2023</p>
        <input type="checkbox" id="stolen" name="stolen" />
        <label for="stolen">Volé ou pas</label>
        <p>Description: Accident</p>
        <p>Status: Réparé</p>
      </div>
    </div>
  )
}

export default Consulter_reclamation