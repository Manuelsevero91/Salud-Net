import React from 'react';
// import Users from '.Users'
import {useEffect, useState} from 'react'


const Formulario = () => {
    //Estados del formulario//
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');

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
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Consulta:', consulta);

  };

  return (
    <>
    <div className = "container">
        <h1>Salud Net</h1>
    <div className = "nosotros">
      <h2>Nosotros</h2>     
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>         
        <button onClick={fetchProf}>Nuestros Profesionales</button>
    </div>
    </div>
    </>
  );
};
export default Body;

