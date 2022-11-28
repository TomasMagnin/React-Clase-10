import React, { useState, useContext } from 'react';
import { contextoGeneral } from '../components/ContextContainer';             // Importamos erl contexto





export default function ItemCount({ ini, max, onAdd }) { 

    const {darkMode, setdarkMode} = useContext(contextoGeneral);        // Usamos el Hook y traemos los datos

    const [count, setCount] = useState(ini);
  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      {count}
      <button onClick={sumar}>+</button>
      <br />
      <button onClick={() => onAdd(count)}>AGREGAR</button>

    {/*  Ejemplo de Context */}

      <button onClick={() => setdarkMode(!darkMode)}>Cambiar al Dark Mode</button>
      {JSON.stringify(darkMode)}    {/* Hacemos esto para poder ver el estado de darKmnode, por defecto es false. */}
    </div>
  );
}