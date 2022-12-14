import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import TestEventos from './components/test/TestEventos';
import ContextContainer from './components/ContextContainer';
import TestRender from './components/test/TestRender';
import { useState } from 'react';
import TestTraerUnDoc from './components/test/TestTraerUnDoc';



export default function App() {
  return (
    <ContextContainer>
      <BrowserRouter>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <Navbar />
        {/* ACA DECLARO RUTAS PUNTUALES */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/test" element={<TestTraerUnDoc />} />
          {/* <Route path="/item/:iditem" element={<ItemDetailContainer />} /> */}

          <Route />
          <Route />
          <Route />
        </Routes>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
        <Footer />
      </BrowserRouter>
    </ContextContainer>
  );
}
