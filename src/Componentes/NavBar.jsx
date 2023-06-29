import React from "react";
import {useState } from "react";
import { Link} from 'react-router-dom'
import Login from "./Login";



function NavBar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };


  return (
    <>
    <div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/ingresar" onclick={handleLoginClick}>Ingresar</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
            </ul>

      </nav>
      </div>
      {showLogin && <Login />}

    </>
    
  );
}
export default NavBar;
