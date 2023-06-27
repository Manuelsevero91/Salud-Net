import { useState , useEffect, useRef} from 'react'
// import {BeatLoader} from 'react spinners'
import Menu from './Menu.jsx'
import error404Image from "./eror-404.jpg"

function Login() {

 const urlBase = "https://647a6fb6d2e5b6101db05b10.mockapi.io/users"
  
  const [ingresar, setIngresar] = useState(false); //manejar si muestra o no el menu
  const [users, setUsers] = useState([]);//manejar la data
  const [loginUser, setLoginUser] = useState(null); //maneja el ingreso
  const [error, setError] = useState(false); //manejar errores
  const notificacionRef = useRef(null); //notifica el estado del formulario
useEffect(()=>{
fetch(urlBase)
.then((res)=>{
  if(!res.ok) throw new Error ("Request Error");
  return res.json();
})
.then((resOk)=>{
  setTimeout(()=>{
    setUsers((prev)=>(prev =resOk));
  },2000); 
})
.catch((err)=> setError(true));

  },[]);
//   if(!users.length && !error)return <BeatLoader/>; 
//   if(error) {
//     return (
//     <div className='error-container'>
//       <img src= {error404Image} alt= "Error 404"/> 
//       </div>)}//imagen de error, hace falta buscarle la vuelta para que tape al body (tiene la imagen del consultorio)

  
    function handleSubmit(e) {
      e.preventDefault();
    
      const enteredUsername = e.target.nombre.value;
      
      const userExists = users.some(user => user.name === enteredUsername); // corrobora si existe el nombre (some)
    
      if (!userExists) {
        alert("Usuario no encontrado");// podemos usar alert o una descripción.. como deseen
        setIngresar(false);
        setLoginUser(null);
        return
      }
       const userFound = users.find(user => user.name === enteredUsername);
  
      if (userFound.id === e.target.password.value) {
        setIngresar(true);
        setLoginUser(userFound);
        notificacionRef.current.style.display = "none"; // si es correcto se oculta y deja que se visualice Menu
      } else {
        alert("Usuario y/o contraseña incorrecta")// podemos usar alert o una descripción.. como deseen
        setIngresar(false);
        setLoginUser(null);
      }
    
      e.target.reset();
    }
      return (
        <>
      <form ref={notificacionRef} onSubmit={handleSubmit} >
          <h2><strong>Iniciar Sesión</strong></h2>
          <label htmlFor="nombre" ><strong>Usuario</strong></label>
          <input type="text" name="nombre" id="nombre" style={{display:'block'}} />
  
          <label htmlFor="password"><strong>Contraseña</strong></label>
          <input type="password" name="password" id="password" style={{display:'block'}}/>
  
        <p id="notificacion" ref={notificacionRef}>  </p>
  
          <button type="submit"> Enviar</button>
      </form>
      {ingresar && <Menu name={loginUser.name}  />}

        </>
      )
    }
    
    export default Login