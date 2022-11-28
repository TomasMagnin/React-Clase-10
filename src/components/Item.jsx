import React, { useState, useContext } from 'react';        // Importamos el useContext
import { Link } from 'react-router-dom';
import { contextoGeneral,  } from '../components/ContextContainer';    // Importamos el contexto general

/* Vamos a crear un context para no pasar la propiedad del abuelo, al padre, hijo y nieto */




export default function Item({item}) {   // Aca el Nieto Item, recive las props supuestamente, pero si usamos context no lllega por props. las Props son ordenes de pare a hijo, pero como lo enviamos del abuelo derecho al Nieto sacamos darkMode, setdarkMode
  
   /*  const [darkMode, setdarkMode] = useState(false);  */       // Este dark modo es propio de cada item, no es general para toda la pagina el mismo estado. ENtonces lo vamos a colocar en el ItemList

  // Aca tenemos el 3er paso que usamos el context

  const { darkMode, setdarkMode} = useContext(contextoGeneral)    // Primero usamos el Hook para atajar las varibles o funciones enviadas en el Provider, y aclaramos que contexto queremos traer, ademas de que varibles o funciones queremos de ese contexto. 


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

        {/* Aca le damos el uso al Darkmode */}
        <button onClick={() => setdarkMode(!darkMode)}>Cambiar al Dark Mode</button>  {/* Nos cambia de estado el darkmode */}
      <br />
      
    </div>
  );
}


