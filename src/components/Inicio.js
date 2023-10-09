import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajosRandom } from './ListadoTrabajosRandom';

export const Inicio = () => {
  const [typedText, setTypedText] = useState('');
  const [textLoaded, setTextLoaded] = useState(false);
  const textToType = `¡Hola! Soy Hernán, un 💻 Desarrollador Web 💻 con sede en Madrid, España. Me apasiona crear experiencias web cautivadoras.
   Mi trayectoria en el mundo del desarrollo web me ha dotado de un variado conjunto de habilidades que incluyen JavaScript, React, PHP y más.
   Echa un vistazo más de cerca a mi portafolio para explorar algunos de mis proyectos recientes y descubrir cómo puedo contribuir a tu próximo emprendimiento de desarrollo web. 🔍💼✨.`;

  useEffect(() => {

    const hasTextLoaded = localStorage.getItem('textLoaded');

    if (!hasTextLoaded) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < textToType.length) {
          setTypedText((prevText) => prevText + textToType.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTextLoaded(true)
          localStorage.setItem('textLoaded', 'true'); // Marca el texto como cargado en el almacenamiento local
        }
      }, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)

      return () => clearInterval(typingInterval); // Limpia el intervalo al desmontar el componente
    } else {
      setTypedText(textToType); // Si el texto ya se ha cargado antes, simplemente establece el texto completo
    }
  }, [textLoaded, textToType]);

  return (
    <div className='home'>
      <h1>{typedText}</h1>

      <h2 className='tittle'>Te ayudo a crear tu sitio o app web <Link to='/contacto'> Contacta conmigo.</Link></h2>

      {/* Poner carrousel de proyectos */}
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos</p>

        <div className='works'>
          <ListadoTrabajosRandom limite='2' /> {/* Pasamos una prop para que se muestren menos proyectos en inicio, el límite será 2 y lo pasamos al componente */}
        </div>
      </section>
    </div>
  );
};
