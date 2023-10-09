import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' data-netlify="true" method="POST" action='mailto:hd.ortiz_j@hotmail.com'>
        <input type='text' placeholder='Nombre' autofill="true"/>
        <input type='text' placeholder='Apellidos' />
        <input type='text' placeholder='Email' />
        <textarea type='text' placeholder='Motivo de contacto' />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  )
}
