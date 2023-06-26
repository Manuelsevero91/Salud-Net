
import React, { useEffect, useState } from 'react';
function Footer() {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('image-container');
      setContainerWidth(container.offsetWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="nosotros">       
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>
        <h2>Sobre Nosotros</h2>
        <div class="image-container" id='image-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBPkpOE2m4FMSXhNkYL13q8ouhtquO3OADA&usqp=CAU" alt="Imagen 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJO1XoGcXEiMsPw7vTEHHWfYJLmD1lkJJEVw&usqp=CAU" alt="Imagen 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oNwQpAQxZY-S15SqjaZrLAUpjm_gBZD8ww&usqp=CAU" alt="Imagen 5" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpQdw2tms9uay7eIDbSPoy65o8dV9Dunekg&usqp=CAU" alt="Imagen 6" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYlN-S2shxQyAFjEsDHOT7NvffDLMRQCStA&usqp=CAU" alt="Imagen 7" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0wRsHWbPoa7X4KORybfMqPj8XH3ydpOmTw&usqp=CAU" alt="Imagen 8" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCvsRYMC-yDgn8oRUxPBrIF2vMQKAQmPTQg&usqp=CAU" alt="Imagen 9" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2U00oUzMufrfuqqG8NVZmDqKXS90xEr_wg&usqp=CAU" alt="Imagen 9" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dL3Itp67sicnH6erKnNJ4JMB8KStRbCeXg&usqp=CAU" alt="Imagen 9" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysLw7NIIfKnnJvifgZIAkQbjilhXwV5wXeadxEXL2iIvkZ9aY_UsMwjPAxTJNQ7k-Wd4&usqp=CAU" alt="Imagen 9" />


        </div>
      </div>
    </>
  )
};
export default Footer;