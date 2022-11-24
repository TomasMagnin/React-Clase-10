import { useState, useEffect } from "react";
import { NavLink ,Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import { producsBK } from "./data.js";
import ItemList from "./ItemList";



export default function ItemListContainer({greeting, }) {        



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
    <div  className="text-center"  style={{ border: "2px solid red"}}>{greeting}
      <ItemList productos={productos} darkMode={darkMode} setdarkMode={setdarkMode} />;   {/* Le pasamos el darkmode al item hijo */}


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