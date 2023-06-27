import React from "react";
import Form from "./Form";
import { useState } from "react";
import "../Styles/Form.css";

function NavBar() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#home">Ingresar</a>
          </li>
        </ul>

        <button onClick={handleContactClick} id="contact">Contacto</button>
      </nav>
      {showContactForm && <Form onSubmit={handleSubmit} />}      
    </>
    
  );
}
export default NavBar;
