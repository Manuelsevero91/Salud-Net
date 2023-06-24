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
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#home">Ingresar</a>
            </li>
          </ul>
        </nav>
        <button onClick={handleContactClick}>Contacto</button>

        {showContactForm && <Form onSubmit={handleSubmit} />}
      </header>
    </>
  );
}
export default NavBar;
