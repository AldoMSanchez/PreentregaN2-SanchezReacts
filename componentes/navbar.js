// src/componentes/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Mi Barbería</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/1">Categoría 1</Link></li>
        <li><Link to="/category/2">Categoría 2</Link></li>
        {/* Puedes agregar más categorías aquí */}
        <li><Link to="/cart">Cart</Link></li> {/* Enlace para el carrito si lo necesitas */}
      </ul>
    </nav>
  );
};

export default Navbar;
