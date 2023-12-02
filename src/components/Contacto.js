import React from 'react'

export const Contacto = () => {
  return (
    <div className="container w-75 bg-secondary mt-5 rounded shadow">
      <form className='text-center' data-netlify="true" method="POST">
        <h1 className='fw-bold text-center py-5'>Contacto</h1>

        <div className='mb-3'>
          <input className="form-control" type='text' placeholder='Nombre' name='nombre' autoComplete="true" />
        </div>

        <div className='mb-3'>
          <input type='text' className='form-control' placeholder='Apellidos' name='apellidos' />
        </div>
        <div className='mb-3'>
          <input type='text' className='form-control' placeholder='Email' name='email' />
        </div>
        <div className='mb-3'>
          <textarea type='text' className='form-control' placeholder='Motivo de contacto' name='motivo' />
        </div>

        <input type='submit' value='Enviar' />

      </form>
    </div>

  )
}
