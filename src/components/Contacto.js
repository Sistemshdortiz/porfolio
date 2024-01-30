import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <h2 className='text-center'>Contacto</h2>
      <p className='text-center h6'>
        ¡Gracias por visitar mi página! Si deseas contactarme, puedes hacerlo a través del siguiente formulario o mediante el enlace de mi LinkedIn abajo expuesto.
      </p>
      <div className="container   bg-secondary mt-5 rounded shadow" style={{ minWidth: '250px', maxWidth: '30%' }}>
        <form className='text-center' data-netlify="true" method="POST" action="mailto:hdortizj@gmail.com" >
          <fieldset>
            <legend className='text-uppercase font-weight-bold'>¿Hablamos?</legend>
          </fieldset>
          <div className='mb-3'>
            <input className="form-control" type='text' placeholder='Nombre' name='nombre' autoComplete="true" />
          </div>
          <div className='mb-3'>
            <input type='email' className='form-control' placeholder='Email' name='email' />
          </div>
          <input type='submit' value='Enviar' className='mb-3' />
        </form>
      </div>
    </div>
  )
}
