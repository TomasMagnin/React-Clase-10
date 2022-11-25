import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoGeneral } from '../App';    // Importamos el contexto general

/* Vamos a crear un context para no pasar la propiedad del abuelo, al padre, hijo y nieto */



export default function Item({item, darkMode, setdarkMode}) {
  
   /*  const [darkMode, setdarkMode] = useState(false);  */       // Este dark modo es propio de cada item, no es general para toda la pagina el mismo estado. ENtonces lo vamos a colocar en el ItemList

  // Aca tenemos el 3er paso que usamos el context

  const { darkMode, setdarkMode} = useContext(contextoGeneral)    // Aclaramos que contexto queremos traer


  return (
    <div   style={{
        color: darkMode ? "black" : "white",
        margin: "10px",
        border: "2px solid yellow",
        backgroundColor: darkMode ? "black" : "white",
    }}
     key={item.id}>
      {JSON.stringify(item)}
      <Link to={'/item/' + item.id}>IR AL ITEM</Link>
      <br />
        <button onClick={ ()=> setdarkMode(!darkMode)}>Cambiar al Dark Mode</button>  {/* Nos cambia de estado el darkmode */}
      <br />
      
    </div>
  );
}


