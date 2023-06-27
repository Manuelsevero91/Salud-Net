import React from "react";
import Form from "./Form";
import {useState } from "react";
// import "../Styles/Form.css";
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
    <div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/ingresar">Ingresar</Link></li>
        </ul>

        <button onClick={handleContactClick} id="contact">Contacto</button>
      </nav>
      {showContactForm && <Form onSubmit={handleSubmit} />}
      </div>
    </>
    
  );
}
export default NavBar;
