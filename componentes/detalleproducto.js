// src/components/DetalleProducto.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams(); // Obtiene el id del producto desde la URL

  // Aquí deberías hacer una llamada a tu API o usar un estado para obtener los detalles del producto
  // Ejemplo de datos de producto:
  const producto = {
    id: 1,
    nombre: 'Corte de Pelo',
    descripcion: 'Corte básico',
    precio: '$10',
  };

  // En una aplicación real, obtendrás estos datos desde un estado o una API basándote en el `id`

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
      <button>Reservar Turno</button>
    </div>
  );
};

export default DetalleProducto;
