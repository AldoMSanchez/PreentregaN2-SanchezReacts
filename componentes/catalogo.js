// src/componentes/catalogo.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Catalogo = () => {
  const { id } = useParams(); // Extrae el parámetro de la URL si lo hay

  // Aquí puedes usar `id` para filtrar los productos si es necesario
  // Suponiendo que tienes una lista de productos:
  const productos = [
    { id: 1, nombre: 'Corte de Pelo', descripcion: 'Corte básico', precio: '$10' },
    { id: 2, nombre: 'Afeitado', descripcion: 'Afeitado con navaja', precio: '$15' },
    // Añadir más productos aquí
  ];

  return (
    <div>
      <h2>Catálogo</h2>
      <ul>
        {productos
          .filter(producto => !id || producto.id === parseInt(id)) // Filtra por categoría si `id` está presente
          .map(producto => (
            <li key={producto.id}>
              <Link to={`/item/${producto.id}`}>
                {producto.nombre} - {producto.precio}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Catalogo;
