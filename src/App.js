import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import ContextContainer from './components/ContextContainer';



/* El import y el export solo sirven para comunicar archivos nada mas es de JS */


// Los Hook siempre es mejor usar un solo Hook y meter todo ahi.
// No todos los Hooks llevan llaves [], por que si devuelve un solo valor no lleva llaves, pero si devuelve mas de un valor si lleva llaves. Tambien pueden devolver funciones. Ek use efect es un ejemplo, teiene una variable darkMode y una funcion setdarkMode



export default function App() {

  return (
    <ContextContainer>
    <BrowserRouter>
      <Navbar  /> {/* Cuando creamos el archivo ContextContainer para hacerlo mas dinamico, quitamos  el darkMode={darkMode} setdarkMode={setdarkMode} ya no hace falta pasarlo por que todos los componentes lo tienen por estar dentro del ContextContainer*/}
      <Routes>
        <Route  path="/"   element={<ItemListContainer  />} />       {/* Cuando creamos el archivo ContextContainer para hacerlo mas dinamico, quitamos  el darkMode={darkMode} setdarkMode={setdarkMode} ya no hace falta pasarlo por que todos los componentes lo tienen por estar dentro del ContextContainer*/}
       {/*  <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        <Route  path="/category/:idcategory"  element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
       {/*  <Route path="/test" element={<TestTraerUnDoc />} /> */}
        {/* <Route path="/item/:iditem" element={<ItemDetailContainer />} /> */}
        <Route />
        <Route />
        <Route />
      </Routes>
     {/*  <Footer /> */}
    </BrowserRouter>
    </ContextContainer>
);
}






