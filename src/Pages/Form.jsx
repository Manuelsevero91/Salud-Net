import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [cerrado, setCerrado] = useState(false);


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConsultaChange = (event) => {
    setConsulta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Consulta:", consulta);
    setEnviado(true);
  };
  const handleClose = () => {
    setCerrado(true)
  
  };

  if (cerrado) {
    return (
      <div className="form-overlay">
        <div className="form-container">
      </div>
      </div>
    )
  };


  if (enviado) {
    return (
      <div className="form-overlay">
        <div className="form-container">
          <p><strong>Formulario enviado correctamente.</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-overlay">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <button onClick={handleClose} className="close-button">Cerrar</button>
          <div>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="consulta">Espacio consulta:</label>
            <input
              type="text"
              id="consulta"
              value={consulta}
              onChange={handleConsultaChange}
            />
          </div>
          <button id="btnSubContact" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;