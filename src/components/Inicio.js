import React from 'react'
import { Link } from 'react-router-dom'
import { Contacto } from './Contacto'
import { ListadoTrabajosRandom } from './ListadoTrabajosRandom'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy Hernán,
        un 💻 <strong>Desarrollador Web</strong>  💻 con base en
        Madrid, España,
        apasionado por crear experiencias web cautivadoras. Mi trayectoria en el mundo del desarrollo web me ha proporcionado un conjunto diverso de habilidades que incluye JavaScript, React, PHP y más.
        Echa un vistazo más de cerca a mi portafolio para explorar algunos de mis proyectos recientes y descubrir cómo puedo contribuir a tu próximo emprendimiento de desarrollo web.

      </h1>

      <h2 className='tittle'>Te ayudo a crear tu sitio o app web<Link to='/contacto'> Contacta conmigo.</Link></h2>

      {/* Poner carrousel de proyectos */}
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos</p>

        <div className='works'>
          <ListadoTrabajosRandom limite='2' /> {/* Pasamos una prop para que se muestren menos proyectos en inicio, el limite será 2 y lo pasamos al componente */}
        </div>
      </section>
    </div>
  )
}
