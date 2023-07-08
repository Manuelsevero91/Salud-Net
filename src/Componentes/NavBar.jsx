import { Link } from 'react-router-dom'
import logoSN from '../assets/logosaludnet.png'
import { useAuth} from '../Componentes/AuthContext';



function NavBar() {
  const { isLoggedIn, username, handleLogout } = useAuth();

  const handleLogoutClick = () => {
    handleLogout();
  };


  return (
    <>
      {/* <div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/"><img id="logoSN" src={logoSN} alt="Logo" />
            </Link>
            </li>            
            {isLoggedIn ? (
              <li><Link to="/" onClick={handleLogoutClick}>Cerrar sesión</Link></li>
            ) : (
              <li><Link to="/login">Ingresar</Link></li>
            )}
            <li><Link to="/contacto">Contacto</Link></li>
            <li> {isLoggedIn && <Link to="/profesionales" id="buttonProf">Nuestros Profesionales</Link>}</li>
          </ul>

        </nav>
      </div> */}
 <div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <img id="logoSN" src={logoSN} alt="Logo" />
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li >{username || 'Nombre de usuario'}</li>
              <li>
                <Link to="/" onClick={handleLogoutClick}>
                  Cerrar sesión
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Ingresar</Link>
            </li>
          )}
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          
          <li>{isLoggedIn && <Link to="/profesionales" id="buttonProf">Nuestros Profesionales</Link>}</li>
        </ul>
      </nav>
    </div>
  





    </>
  );
}
export default NavBar;