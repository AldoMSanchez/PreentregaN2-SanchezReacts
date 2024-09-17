// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../componentes/navbar';
import Catalogo from "../componentes/catalogo";
import DetalleProducto from '../componentes/detalleproducto';
import '../css/styles.css'; // Ajusta la ruta de importación aquí

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/category/:id" element={<Catalogo />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
