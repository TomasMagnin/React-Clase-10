import * as React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';





export default function Navbar() {
    return (
    
  
      <div>
          
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Quienes Somos</NavLink>
            <NavLink to="/">Contactos</NavLink>
            <NavLink to="/"></NavLink>
        
    
      <CartWidget/>

      </div>
    );
}