import React from 'react'
import "./OrderConfirmation.css"

function OrderConfirmation({ contract }) {
  console.log("contract[BoutiqueTitle]", contract)
    console.log("contract[BoutiqueTitle]",contract["contract"]["boutiqueTitle"])
  return (
    <div className="boutique-page">
      <h1 className="boutique-title">{contract["contract"]["boutiqueTitle"]}</h1>
      
      <div className="sommaire">
        <h2>Sommaire</h2>
        <ul>
          <li>
            <h3>Transaction Compléte</h3>
            <p><strong>Nom utilisateur:</strong> kimdpith</p>
            <p><strong>Mot de passe:</strong> deno24</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OrderConfirmation