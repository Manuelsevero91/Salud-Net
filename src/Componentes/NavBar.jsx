import React from "react";
import Form from "./Form";
import { useState } from "react";
import "../Styles/Form.css";
import { Link } from 'react-router-dom'


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
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Ingresar</Link></li>
        </ul>

        <button onClick={handleContactClick} id="contact">Contacto</button>
      </nav>
      {showContactForm && <Form onSubmit={handleSubmit} />}
    </>
  );
}
export default NavBar;
