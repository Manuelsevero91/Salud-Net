import {useState } from "react";
import { Link} from 'react-router-dom'
import Login from '../Pages/Login'
import logoSN from '../assets/logosaludnet.png'



function NavBar({ isLoggedIn, handleLogout }) {
  const handleLogoutClick = () => {
    handleLogout();
  };


  return (
    <>
    <div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/"><img src={logoSN} alt="Logo"style={{ width: "50px", height: "auto" }}/>
          </Link>
           </li>
          {isLoggedIn ? (
              <li><Link to="/" onClick={handleLogoutClick}>Cerrar sesión</Link></li>
            ) : (
          <li><Link to="/login">Ingresar</Link></li>
          )}
          <li><Link to="/contacto">Contacto</Link></li>
            </ul>

      </nav>
      </div>
    </>
  );
}
export default NavBar;
