import { Routes, Route } from 'react-router-dom';
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Home.css";
import "./Styles/Form.css";
import './Styles/Login.css';
import './Styles/Users.css'
import './Styles/Marketing.css'
import './Styles/Footer.css'
import NavBar from "./Componentes/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Contacto from "./Pages/Contacto"
import Users from "./Pages/Users"
import NotFound from "./Pages/NotFound";
import { UserProvider } from './Componentes/UserContext';
import ProtectedRoute from "./Auth/ProtectedRoute";
import Lista from "./Componentes/Lista"

function App() {

  return (
    <>

      <UserProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/especialidades" element={<Lista/>} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/profesionales" element={<Users />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserProvider>

    </>
  );
}

export default App;