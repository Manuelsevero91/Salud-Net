import Marketing from '../Componentes/Marketing'
import Footer from '../Componentes/Footer'

function Home({ isLoggedIn }) {

  return (
    <>
      <body class='inicio'>
        <div className="container">
          {!isLoggedIn && <h1>Bienvenidos a Salud Net</h1>}
        </div>

        <div className="nosotros">
          <h2>Sobre Nosotros</h2>
          <p className="spaced-paragraph">
            "SaludNet nació en el 2016 como iniciativa de un conjunto de profesionales
            con la misión de mejorar la salud en las personas.
            Nuestro propósito es ofrecer una calidad de atención eficaz  al
            servicios de atención de la salud basados en la evidencia;
            segura  al evitar daños a las personas a las que está destinado el cuidado;
            oportuna  al reducir los tiempos de espera y eficiente  maximizando el beneficio
            de los recursos disponibles y evitando el desperdicio.
            Ofrecemos una gran variedad de especialidades para brindar un cuidado integral
            que se base en la prevención de enfermedades y en la promoción de hábitos saludables
            para una población con una creciente expectativa de vida."
          </p>
        </div>
        <Marketing />
        <Footer />
      </body>
    </>
  );
};
export default Home;