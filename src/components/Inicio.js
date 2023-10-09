import { Link } from 'react-router-dom';
import { ListadoTrabajosRandom } from './ListadoTrabajosRandom';
import TypingEffect from './TypingEffect';

export const Inicio = () => {

  const textToType =
    `  ¡Hola! Soy Hernán, un 💻 Desarrollador Web 💻 con sede en Madrid, España. Te doy la bienvenida a mi Porfolio, echa un vistazo más de cerca a mi portafolio para explorar algunos de mis proyectos recientes. 🔍💼✨.`
  ;

  return (
    <div className='home'>

        <TypingEffect textToType={textToType} />
     
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
