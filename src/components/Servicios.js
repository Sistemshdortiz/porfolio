import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Sobre Mí</h1><br></br>

      <section className='about-me'>

        <article className='about-section'>
          <div className='image-container'>
            <img src={'/images/perfil_Img.png'} alt={'imageAlt'} width={320} height={320} style={{ marginRight: '10px', borderRadius: '25% 75% 70% 30% / 54% 30% 70% 46% ' }} />
          </div><br></br>
          <div className='text-container'>
            <h2>Mi Pasión</h2>
            <p>Soy un apasionado desarrollador web con un profundo entusiasmo por la creación de experiencias en línea que sean no solo memorables,
               sino también altamente efectivas. Mi compromiso radica en llevar a cabo proyectos web que cautiven a los usuarios.</p>
          </div>
        </article>

        <article className='about-section'>
          <h2>Mi Trayectoria</h2>
          <p>Con una sólida formación en Desarrollo de Aplicaciones Web, he tenido el privilegio de trabajar en proyectos variados y emocionantes.
            Un ejemplo destacado es mi participación en un proyecto de Realidad Virtual, donde pude aplicar mis conocimientos para crear experiencias inmersivas e innovadoras. Además, contribuí a la mejora de una plataforma web de outsourcing, optimizando su rendimiento y usabilidad, lo que resultó en una experiencia más eficiente para los usuarios.</p>
        </article>

        <article className='about-section'>
          <h2>Mi Enfoque</h2>
          <p>Creo en la sinergia entre un diseño creativo y una funcionalidad sólida para lograr resultados excepcionales que superen las
            expectativas de nuestros clientes.En mi enfoque, la calidad de un producto se mide por la satisfacción del usuario final,
            lo que impulsa constantemente mi búsqueda de la excelencia en cada proyecto.</p>
        </article>

        <article className='about-section'>
          <h2>Mis Valores</h2>
          <p>La calidad, la innovación y la satisfacción del cliente son mis principios fundamentales. Siempre me esfuerzo por superar los desafíos y aprender algo nuevo en cada proyecto.</p>
        </article>

      </section>
    </div>



  )
}
