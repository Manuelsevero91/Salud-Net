import React from "react";

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
      <ImageParagraph
        imageSrc="https://www.cmguanella.com.ar/images/pic03.jpg"
        title="Tecnología de vanguardia"
        paragraph="En nuestros consultorios, contamos con tecnología de vanguardia para brindarte diagnósticos precisos y tratamientos efectivos. Nuestros equipos médicos están equipados con las últimas herramientas y dispositivos médicos para asegurar la calidad y eficiencia en cada consulta. Además, mantenemos nuestros consultorios actualizados con los avances tecnológicos más recientes para ofrecerte la mejor atención médica."

      />
      <ImageParagraph
        title="Epecialidades"
        paragraph="En nuestros consultorios, contamos con tecnología de vanguardia para brindarte diagnósticos precisos y tratamientos efectivos. Nuestros equipos médicos están equipados con las últimas herramientas y dispositivos médicos para asegurar la calidad y eficiencia en cada consulta. Además, mantenemos nuestros consultorios actualizados con los avances tecnológicos más recientes para ofrecerte la mejor atención médica."
        imageSrc="https://bancosdeimagenes.com/wp-content/uploads/2019/03/Getty-Medical-Category-768x443-1.jpg"
      />
    </div>
  );
};

export default Marketing;

