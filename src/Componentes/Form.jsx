import React, { useState } from "react";

const Formulario = () => {
  //Estados del formulario//
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [enviado, setEnviado] = useState(false);

  //Manejo de eventos//
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
    // Mostrar datos en consola//
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Consulta:", consulta);
    // Reiniciar los valores de los campos y establecer el estado de enviado a true
    setNombre('');
    setEmail('');
    setConsulta('');
    setEnviado(true);
  };

  // Verificar si el formulario ha sido enviado y mostrar un mensaje de éxito
  if (enviado) {
    return <p>Formulario enviado correctamente.</p>;
  }

  return (
    <>
    <div id="containerForm">
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Enviar</button>
      </form>
      </div>
    </>
  );
};

export default Formulario;
