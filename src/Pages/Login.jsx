import React, { useState, useEffect, useRef } from 'react';
import Menu from '../Componentes/Menu.jsx';
// import { useNavigate } from 'react-router-dom';

function Login({handleLogin}) {
  const urlBase ="https://647a6fb6d2e5b6101db05b10.mockapi.io/users";

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
        }, 2000);
      })
      .catch((err) => setError(true));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const enteredUsername = e.target.nombre.value;

    const userExists = users.some((user) => user.name === enteredUsername);

    if (!userExists) {
      alert('Usuario no encontrado');
      setIngresar(false);
      setLoginUser(null);
      return;
    }
    const userFound = users.find((user) => user.name === enteredUsername);

    if (userFound.id === e.target.password.value) {
      setIngresar(true);
      setLoginUser(userFound);
      notificacionRef.current.style.display = 'none';
      handleLogin(); 
    } else {
      alert('Usuario y/o contraseña incorrecta');
      setIngresar(false);
      setLoginUser(null);
    }

    e.target.reset();
  }

  return (
    <>
      <form ref={notificacionRef} onSubmit={handleSubmit}>
        <h2>
          <strong>Iniciar Sesión</strong>
        </h2>
        <label htmlFor="nombre">
          <strong>Usuario</strong>
        </label>
        <input type="text" name="nombre" id="nombre" style={{ display: 'block' }} />

        <label htmlFor="password">
          <strong>Contraseña</strong>
        </label>
        <input type="password" name="password" id="password" style={{ display: 'block' }} />

        <p id="notificacion" ref={notificacionRef}></p>

        <button type="submit">Enviar</button>
      </form>
      {ingresar && <Menu name={loginUser.name} />}
    </>
  );
}

export default Login;
