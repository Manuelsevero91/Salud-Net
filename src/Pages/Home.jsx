import {Link} from 'react-router-dom'

function Home({isLoggedIn}) {

  return (
    <>
    <body class= 'inicio'>
    <div className = "container">
        <h1>Bienvenidos a Salud Net</h1>
        {isLoggedIn && (
      
        <Link to="/profesionales" id="buttonProf">Nuestros Profesionales</Link>   
        )}
    </div>
    
    <div className="nosotros">
    <h2>Sobre Nosotros</h2>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
    {isLoggedIn && (
          <p>
            Aquí puedes agregar un párrafo adicional sobre nosotros cuando el inicio de sesión es correcto.
          </p>
        )}
  </div>
  </body>
    </>
  );
};
export default Home;
