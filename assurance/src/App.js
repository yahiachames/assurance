import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home'; // Import your page components
import Menu from './pages/Menu';
import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutiques/Boutique';
import Police from './pages/Police';
import AtelierReparation from './pages/AteulierReparation/AtelierReparation';
import Reclamation from './pages/Reclamation';
import GestionContrat from './pages/GestionContrat';
import TraitementReclamation from './pages/TraitementReclamation';
import BoutiqueProducts from './pages/Boutiques/BoutiqueProducts/BoutiqueProducts';
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

         <Route path="/boutique_products" element={<BoutiqueProducts/>} />
        <Route path="/boutique" element={<Boutique/>} />
        <Route path="/police" element={<Police/>} />
        <Route path="/atelier_reparation" element={<AtelierReparation/>} />
        <Route path="/reclamation" element={<Reclamation/>} />
        <Route path="/gestion_contrat" element={<GestionContrat/>} />
        <Route path="/traitement_reclamation" element={<TraitementReclamation />} />
        <Route path="/" element={<Acceuil/>} />
       
      </Routes>
    </Router>
  );
}

export default App;