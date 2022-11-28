import { useState, useEffect } from "react";
import { NavLink ,Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import { producsBK } from "./data.js";
import ItemList from "./ItemList";

// Para uysar el context, sacamos el darkMoe y setDarkmode, que es lo que recive.

export default function ItemListContainer({}) {        



  const { idcategory } = useParams();                   /*  Sacamos el ID de categoria de la URL */

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // alert("cambio la categoria por eso salta de nuevo este efecto");
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(producsBK);
      }, 1000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);        /* Si cambia el ID de Categoria se ejecuta de nuevo el componente, por ende la promesa se ejecuta */

  return (
    <div  className="text-center"  style={{ border: "2px solid red"}}>
      <ItemList 
          productos={productos} 

          // Para usar el context sacamos este pasamano, ya que nos soluciona esto el context. estos son los parametros que enviabamos al item hijo

           /* darkMode={darkMode} 
          setdarkMode={setdarkMode} */ />;   {/* Le pasamos el darkmode al item hijo */} 


       {!productos.length && "Loading..."}           {/* Esto es el equivalente a un IF, si la varible productos tiene contenido entonces aparece el string loading */}
      {productos.map((item) => (
        <div key={item.id}>
          {JSON.stringify(item)}
          <br />
          <br />
        </div>
      ))}
    </div>
  )
}