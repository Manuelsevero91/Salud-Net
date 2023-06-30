import React from "react";
import {useState } from "react";
import { Link} from 'react-router-dom'
import Login from "../Pages/Login";



function NavBar({ isLoggedIn, handleLogout }) {
  const handleLogoutClick = () => {
    handleLogout();
  };


  return (
    <>
    <div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          {isLoggedIn ? (
              <li><Link to="/" onClick={handleLogoutClick}>Cerrar sesión</Link></li>
            ) : (
          <li><Link to="/ingresar">Ingresar</Link></li>
          )}
          <li><Link to="/contacto">Contacto</Link></li>
            </ul>

      </nav>
      </div>
    </>
  );
}
export default NavBar;
