import React from "react";

function NavBar() {
  
  return (
    <>
      <header className= "header">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a>
            </li>
            <li><a href="#home">Ingresar</a>
            </li>
          </ul>          
        </nav>
        <a href="#"className ="btn"><button>Contacto</button></a>
           </header>
    </>
  );
}
export default NavBar;
