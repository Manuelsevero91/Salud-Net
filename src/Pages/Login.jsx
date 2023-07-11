import React, { useState, useEffect, useRef } from 'react';
import { BeatLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import logoSN from '../assets/logosaludnet.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Componentes/UserContext';
import NotFoundImage from '../assets/not-found.jpg';


function Login({ isLoggedIn }) {
  const { handleLogin } = useAuth();

  const navigate = useNavigate();
  const urlBase = "https://647a6c2ad2e5b6101db05795.mockapi.io/API1/medicos";

  const [ingresar, setIngresar] = useState(false);
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState(null);
  const [error, setError] = useState(false);
  const notificacionRef = useRef(null);

  useEffect(() => {
    fetch(urlBase)
      .then((res) => {
        if (!res.ok) throw new Error('Request Error');
        return res.json();
      })
      .then((resOk) => {
        setTimeout(() => {
          setUsers((prev) => (prev = resOk));
        }, 1000);
      })
      .catch((err) => setError(true));
  }, []);

  if (!users.length && !error) return (
    <BeatLoader style={{
      position: ' fixed', top: '50%', left: ' 50%',
      transform: 'translate(-50%, -50%)'
    }} />
  )
  if (error) {
    return (
      <div className='error-container'>
        <img src={NotFoundImage} alt="Error 404" />
      </div>)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const enteredUsername = e.target.nombre.value;
     // verifica si existe el nombre
    const userExists = users.some(user => user.Name === enteredUsername);

    if (!userExists) {
      Swal.fire({
        imageUrl: logoSN,
        imageHeight: 250,
        imageWidth: 250,
        html: `<p>El usuario <b>${e.target.nombre.value}</b> no existe en la base de datos </p> `,
        timer: 3000,
      })
      setIngresar(false);
      setLoginUser(null);
      return
    }
    const userFound = users.find(user => user.Name === enteredUsername);

    if (userFound.Password === e.target.password.value) {
      Swal.fire({
        imageUrl: logoSN,
        imageHeight: 250,
        imageWidth: 250,
        html: `<p>Bienvenido <b>${e.target.nombre.value}</b> a nuestro sitio.</p> `,
        timer: 3000,

      })
      handleLogin(enteredUsername);
      navigate('/');

      setIngresar(true);
      setLoginUser(userFound);
      notificacionRef.current.style.display = "none";
    } else {
      setIngresar(false);
      setLoginUser(null);
      Swal.fire({
        imageUrl: logoSN,
        imageHeight: 250,
        imageWidth: 250,
        html: `<p>La <b>CONTRASEÑA</b> ingresada no es correcta, vuelva a intentarlo </p> `,
        timer: 3000,
      })
    }
    e.target.reset();
  }

  return (
    <>
      <div className='login'>
        <form ref={notificacionRef} onSubmit={handleSubmit}>
          <h3 id="inicioSesion"><strong>Iniciar Sesión</strong></h3>
          <label htmlFor="nombre"><strong>Usuario</strong></label>

          <input type="text" name="nombre" id="nombre" placeholder="Introduzca su nombre" style={{ display: 'block' }} />

          <label htmlFor="password"><strong>Contraseña</strong></label>
          <input type="password" name="password" id="password" placeholder="Introduzca su contraseña" style={{ display: 'block' }} />

          <p id="notificacion" ref={notificacionRef}></p>

          <button id="enviarLogin" type="submit">Enviar</button>
        </form>
        {isLoggedIn && ingresar && <Menu name={loginUser.name} />}
      </div>
    </>
  );
}

export default Login;
