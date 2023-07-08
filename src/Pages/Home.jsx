import Marketing from '../Componentes/Marketing'
import Footer from '../Componentes/Footer'
import {useAuth}  from '../Componentes/AuthContext';


function Home() {
  const { isLoggedIn } = useAuth;


  return (
    <>
     <div className= 'inicio'>
    <section className = "container">
        {!isLoggedIn && <h1>Bienvenidos a Salud Net</h1>}
    </section>
    
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
   
  </div>
  <Marketing />
  <Footer/>
  </div>
    </>
  );
};
export default Home;