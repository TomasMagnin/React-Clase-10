import './App.css';
/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Footer from './components/Footer'; */
import ItemListContainer from './components/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
//import TestEventos from './components/test/TestEventos';
//import ContextContainer from './components/ContextContainer';
//import TestRender from './components/test/TestRender';
import { useState, createContext } from 'react';
//import TestTraerUnDoc from './components/test/TestTraerUnDoc';



/* Pasos del Context */
// 1_ creamos el contexto, 2 creamos el Provider para proveer variables y funciones, estados, 3_ el que lo usaContext en el hijo.


// Los Hook siempre es mejor usar un solo Hook y merter todo ahi.


/* Usamo el context para Proveer un estado directamente a los hijos que querramos, pero afecta a todos los hijos */

// No todos los Hooks llevan llaves [], por que si devuelve un solo valor no lleva llaves, pero si devuelve mas de un valor si lleva llaves. Tambien pueden devolver funciones

export const contextoGeneral =  createContext();    // Usamos este hook para otro componente, y lo exportamos, no necesariamente tiene que ser por default.

// Para exportarlo usamos " import { contextoGeneral } from '../App'; "



export default function App() {


  const [darkMode, setdarkMode] = useState(false);    /* Delcaramos aca el dark item para poder usarlo en toda la pagina, cuidado que se lo tengo que pasar a los hijos y nietos, (itemListContainer,itemList y item) */

  return (
    
    
    <contextoGeneral.Provider value={ { darkMode, setdarkMode} }>             {/* Este contexto general va proveer con los valores "darkMode, setdarkMode" a todos los hijos de ese contexto, todos los que estan dentro de BrowserRouter. Tambien podemos mandar variavles quen no estan dentro de la funcion contextoGeneral */}

    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar darkMode={darkMode} setdarkMode={setdarkMode} />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route  path="/"   element={<ItemListContainer darkMode={darkMode} setdarkMode={setdarkMode} />} />
       {/*  <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        <Route  path="/category/:idcategory"  element={<ItemListContainer />} />
        {/* <Route path="/item/:iditem" element={<ItemDetailContainer />} /> */}
       {/*  <Route path="/test" element={<TestTraerUnDoc />} /> */}
        {/* <Route path="/item/:iditem" element={<ItemDetailContainer />} /> */}

        <Route />
        <Route />
        <Route />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
     {/*  <Footer /> */}
    </BrowserRouter>
    </contextoGeneral.Provider>
);
}






