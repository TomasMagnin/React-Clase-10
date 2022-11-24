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






/* Usamo el context para pasar un estado directamente al hijo que querramos, pero afecta a todos los hijos */

export const contextoGeneral =  createContext();    // Usamos este hook para otro componente, y lo exportamos, no necesariamente tiene que ser por default.





export default function App() {

  const [darkMode, setdarkMode] = useState(false);    /* Delcaramos aca el dark item para poder usarlo en toda la pagina, cuidado que se lo tengo que pasar a los hijos y nietos, (itemListContainer,itemList y item) */

  return (
    
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
  
);
}






