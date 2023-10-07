import React from 'react';
import myResumePDF from '../cv/Hernán_Ortiz_Jinez_CV.pdf';

export const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Curriculum de Hernán David Ortiz</h1>

      {/* Mostrar el PDF directamente en la página */}
      <embed src={myResumePDF} type="application/pdf" width="100%" height="500px" />
    </div>
  );
};

