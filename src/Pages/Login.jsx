import React, { useState, useEffect, useRef } from 'react';
import {BeatLoader} from 'react-spinners'
import Swal from 'sweetalert2'
import logoSN from '../assets/logosaludnet.png'
import { useNavigate } from 'react-router-dom';


function Login({handleLogin}) {
  const navigate = useNavigate();
  const urlBase ="https://647a6c2ad2e5b6101db05795.mockapi.io/API1/medicos";

  const [ingresar, setIngresar] = useState(false);
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState(null);
  const [error, setError] = useState(false);
  const notificacionRef = useRef(null);
  const nombreRef = useRef(null);

  useEffect(() => {
    fetch(urlBase)
      .then((res) => {
        if (!res.ok) throw new Error('Request Error');
        return res.json();
      })
      .then((resOk) => {
        setTimeout(() => {
          setUsers((prev) => (prev = resOk));
          // nombreRef.current.focus()
        }, 1000);
      })
      .catch((err) => setError(true));
  }, []);

  if(!users.length && !error)return <BeatLoader/>; 
  if(error) {
    return (
    <div className='error-container'>
      <img src= {error404Image} alt= "Error 404"/> 
      </div>)}

function handleSubmit(e) {
  e.preventDefault();

  const enteredUsername = e.target.nombre.value;
  const userExists = users.some(user => user.Name === enteredUsername); // corrobora si existe el nombre (some)

  if (!userExists) {
    Swal.fire({
      imageUrl: logoSN ,
      imageHeight: 250,
      imageWidth: 250,
      // imageAlert: "Logo de Salud Net",
      html: `<p>El usuario <b>${e.target.nombre.value}</b> no existe en la base de datos </p> `,
      timer: 3000,
      icon:"error",
    })
    setIngresar(false);
    setLoginUser(null);
    return
  }
   const userFound = users.find(user => user.Name === enteredUsername);

  if (userFound.Password === e.target.password.value) {
    Swal.fire({
      imageUrl: logoSN ,
      imageHeight: 250,
      imageWidth: 250,
      // imageAlert: "Logo de Salud Net",
      html: `<p>Bienvenido <b>${e.target.nombre.value}</b> a nuestro sitio.</p> `,
      timer: 3000,
      icon:"sucess",
     
    })
    handleLogin(userFound);
    navigate('/');

    setIngresar(true);
    setLoginUser(userFound);
    notificacionRef.current.style.display = "none"; // si es correcto se oculta y deja que se visualice Menu
  } else {
    setIngresar(false);
    setLoginUser(null);
    Swal.fire({
      imageUrl: logoSN ,
      imageHeight: 250,
      imageWidth: 250,
      // imageAlert: "Logo de Salud Net",
      html: `<p>La <b>CONTRASEÑA</b> ingresada no es correcta, vuelva a intentarlo </p> `,
      timer: 3000,
      icon:"error",
    })
  }
  e.target.reset();
}

  return (
    <>
    <body className= 'login'>
      <form ref={notificacionRef} onSubmit={handleSubmit}>
        <h3 id="inicioSesion"><strong>Iniciar Sesión</strong></h3>
        <label htmlFor="nombre"><strong>Usuario</strong></label>
        {/* <input type="text" name="nombre" id="nombre" style={{ display: 'block' }} /> */}
        <input ref={nombreRef} type="text" name="nombre" id="nombre" placeholder="Introduzca su nombre" style={{display:'block'}} />
  
        <label htmlFor="password"><strong>Contraseña</strong></label>
        <input type="password" name="password" id="password" placeholder="Introduzca su contraseña" style={{display:'block'}}/>

        <p id="notificacion" ref={notificacionRef}></p>

        <button id="enviarLogin" type="submit">Enviar</button>
      </form>
      {ingresar && <Menu name={loginUser.name} />}
      </body>
    </>
  );
}

export default Login;

