import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [cerrado, setCerrado] = useState(false);
  const [errores, setErrores] = useState({});


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
    const errores = validarFormulario();
    if (Object.keys(errores).length === 0) {
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Consulta:", consulta);
      setEnviado(true);
    } else {
      setErrores(errores);
    }
  }
  const validarFormulario = () => {
    const errores = {};

    if (nombre.trim() === "") {
      errores.nombre = "Este campo es obligatorio";
    }

    if (email.trim() === "") {
      errores.email = "Este campo es obligatorio";
    } else {
      const nombreApellido = nombre.trim().split(" ");
      if (nombreApellido.length < 2) {
        errores.nombre = "Debe ingresar el nombre y apellido";
      }
    }

    if (consulta.trim() === "") {
      errores.consulta = "Este campo es obligatorio";
    }

    if (nombre.trim() !== "" && nombre.indexOf(" ") === -1) {
      errores.nombre = "Debe ingresar el nombre y apellido";
    }

    return errores;
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
          <p id="FormSucces"><strong>Formulario enviado correctamente</strong></p>
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
            <input type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange} />
            {errores.nombre && <span className="error-label">{errores.nombre}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email"
              id="email"
              value={email}
              onChange={handleEmailChange} />
            {errores.email && <span className="error-label">{errores.email}</span>}
          </div>
          <div>
            <label htmlFor="consulta">Espacio consulta:</label>
            <input type="text"
              id="consulta"
              value={consulta}
              onChange={handleConsultaChange}/>
            {errores.consulta && <span className="error-label">{errores.consulta}</span>}
          </div>
          <button id="btnSubContact" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;