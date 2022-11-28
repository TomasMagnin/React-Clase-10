import React from 'react'
import { useState, createContext } from 'react';              // Creamos el context


/* Pasos del Context */

// 1_ creamos el contexto y lo guardamos en una variable, 2 creamos el Provider para proveer variables y funciones, estados, 3_ el que lo usaContext en el hijo.

// Por lo general para pasar las propiedades de padre a hijo se puede hacer por props pero ya si va desde el padre al nieto ahi conviene contexto

/* Usamo el context para Proveer un estado directamente a los hijos que querramos, pero afecta a todos los hijos */
// Con el context mantenemos la jerarquia padre hijo pero no hace falta hacer la cadena de ir pasando las propiedades.  

// Esta varible la va usar el componente Item, en este caso, por eso la exportamos.



export const contextoGeneral =  createContext();    // Usamos este Hook para crear el componente, lo asignamos a una vribale y lo exportamos, no necesariamente tiene que ser por default.
// Para importarlo usamos " import { contextoGeneral } from '../App'; "



// Transportamos toda la logica de la App para aca y usamos el ContextContainer.

export default function ContextContainer({children}) {   // El children que llega por props lo envia React, nos llega todos los hijos de la App, y luego del return los enviamos renderizados  
    const [darkMode, setdarkMode] = useState(false);    /* Delcaramos aca el estado darkMode item para poder usarlo en toda la pagina, cuidado que se lo tengo que pasar a los hijos y nietos, (itemListContainer,itemList y item) */
    const x = 10;
    function algo() {}


  return (
    <contextoGeneral.Provider value={ { darkMode, setdarkMode, x, algo} }>             {/* Este contexto general va proveer con los valores "darkMode, setdarkMode" a todos los hijos de ese contexto, todos los que estan dentro de BrowserRouter. Tambien podemos mandar variables quen no estan dentro de la funcion contextoGeneral, el contenido del value es un objeto. */}
        {children}          {/* Enviamos los hijos que recivimos ya con los valores   */}                    
    </contextoGeneral.Provider>
  )
}




// Para el proyecto proveer con las sigunetes funciones para el carrito a la app 

/* const[carrito, set carrito] = useState([]);

function addItem(item, quantity)    // Agregar cierta cantidad de items al carrito
function removeItem(itemID)         // Remover un item del Cart usando su ID
function clear()                    // Remover todos los items
function isInCart: (id) => true|false */