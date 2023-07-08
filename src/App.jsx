import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import './Styles/index.css';
import './Styles/Login.css';
import './Styles/Users.css'
import './Styles/Marketing.css'
import './Styles/Footer.css'
import Home from "./Pages/Home";
import NavBar from "./Componentes/NavBar";
import { Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login";
import Contacto from "./Pages/Contacto"
import {useState, useEffect} from 'react'
import Users from "./Pages/Users"
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { UserProvider } from './Componentes/UserContext';

function App() {

  return (
    <>

<UserProvider>

 <NavBar  /> 
<Routes>
     <Route path="/" element={<Home  />} />
     <Route exact path="/contacto" element={<Contacto />} />
     <Route path="/login" element={<Login />}/>
     <Route element={<ProtectedRoute />}>
     <Route path="/profesionales" element={<Users/>} />
     </Route>   
     <Route path='*' element={<NotFound />} />
 </Routes>
 </UserProvider>
 
    </>
    );
}

export default App;