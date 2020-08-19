import React from 'react';
import {Link} from 'react-router-dom';
function Producto({data}) {
  return (
    <div className="App">
        {data._id}
        {data.nombre}
        {data.precio}
        {data.oferta}
        {data.cantidad}
        {data.descripcion}
        <Link to={'producto/' +data._id}>Ver detalle</Link>
    </div>
  );
}

export default Producto;
