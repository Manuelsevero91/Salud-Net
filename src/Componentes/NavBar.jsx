import React from "react";

function NavBar() {
  
  return (
    <>
      <header className= "header">
        <nav>
          <ul class="nav-links">
            <li><a href="#home">Inicio</a>
            </li>
            <li><a href="#home">Ingresar</a>
            </li>
          </ul>          
        </nav>
        <a href="#"class ="btn"><button>Contacto</button></a>
           </header>
    </>
  );
}
export default NavBar;
