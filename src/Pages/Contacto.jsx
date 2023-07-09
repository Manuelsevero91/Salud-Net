import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";

function Contacto() {
  const location = useLocation();
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (location.pathname === "/contacto") {
      setShowContactForm(true);
    }
  }, [location]);

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      {showContactForm && <Form onSubmit={handleSubmit} />}
    </div>

  );
}


export default Contacto;