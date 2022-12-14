import React, { useState, useContext } from 'react';    // Importamos el useContext
import { Link } from 'react-router-dom';
import Item from './Item';


export default function ItemList({ productos}) {
  
  console.log('render de item list ');

/*   const [darkMode, setdarkMode] = useState(false);     */            /* Creamos el estado dark mode para los hijos (Item) */      

  return (
    <div style={{ border: '2px solid green', margin: '10px' }}>
      {!productos.length && 'Loading...'}
      {productos.map((item) => (

       // Para usar el context sacamos este pasamano, "darkMode={darkMode} setdarkMode={setdarkMode}" ya que nos soluciona esto el context. estos son los parametros que enviabamos al item hijo
        <Item item={item} />   /* Pasamos por props el el estado del darkmode a los hijos Item */
      ))}
    </div>
  );
}