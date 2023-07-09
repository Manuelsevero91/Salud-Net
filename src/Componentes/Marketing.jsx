import {Link} from 'react-router-dom'

const ImageParagraph = ({ imageSrc, title, paragraph }) => {
  return (
    <div className="image-paragraph">
      <img src={imageSrc} alt="Imagen" />
      <div className="content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

const Marketing = () => {
  return (
    <div className="marketing-container">
      <ImageParagraph
        imageSrc="https://www.cmguanella.com.ar/images/pic01.jpg"
        title="Bienestar y cuidado de la salud"
        paragraph="En nuestros consultorios médicos, nos enfocamos en tu bienestar y cuidado de la salud. Nuestro equipo de profesionales altamente capacitados está dedicado a brindarte una atención integral y personalizada. Desde consultas médicas generales hasta especialidades específicas, estamos comprometidos en proporcionarte los mejores servicios médicos para que puedas mantener tu salud en óptimas condiciones."
      />
      <ImageParagraph id="Tecnología"
        imageSrc="https://media.istockphoto.com/id/872676342/es/foto/concepto-de-tecnolog%C3%ADa-m%C3%A9dica-registro-m%C3%A9dico-electr%C3%B3nico.jpg?s=612x612&w=0&k=20&c=_Zg00u1zKtFAeH2EiNaA8htvx8yDFsq568pMl3wpyC0="
        title="Tecnología de vanguardia"
        paragraph="En nuestros consultorios, contamos con tecnología de vanguardia para brindarte diagnósticos precisos y tratamientos efectivos. Nuestros equipos médicos están equipados con las últimas herramientas y dispositivos médicos para asegurar la calidad y eficiencia en cada consulta. Además, mantenemos nuestros consultorios actualizados con los avances tecnológicos más recientes para ofrecerte la mejor atención médica."

      />
      <ImageParagraph
        title={
          <Link to="/especialidades" className="btn-especialidades">
            Ver Especialidades
          </Link>
        }
        paragraph="En nuestros consultorios, contamos con tecnología de vanguardia para brindarte diagnósticos precisos y tratamientos efectivos. Nuestros equipos médicos están equipados con las últimas herramientas y dispositivos médicos para asegurar la calidad y eficiencia en cada consulta. Además, mantenemos nuestros consultorios actualizados con los avances tecnológicos más recientes para ofrecerte la mejor atención médica."
        imageSrc="https://bancosdeimagenes.com/wp-content/uploads/2019/03/Getty-Medical-Category-768x443-1.jpg"
      />
    </div>
  );
};

export default Marketing;

