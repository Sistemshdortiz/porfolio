import React from 'react';
import myResumePDF from '../cv/Hernán Ortiz Jinez_es.pdf';
import myResumePDF2 from '../cv/Hernán Ortiz Jinez_en.pdf';


export const Curriculum = () => {

  const [currentPDF, setCurrentPDF] = React.useState(myResumePDF);

  const handleButtonClick = (pdf) => {
    setCurrentPDF(pdf);
  };
  return (
    <div className='page'>
      <h1 className='heading'>Cv</h1>

      {/* Mostrar el PDF directamente en la página */}
      <embed src={currentPDF} type="application/pdf" width="100%" height="600px" />
      {/* Botones para cambiar el PDF */}
      <button onClick={() => handleButtonClick(myResumePDF)}>Cv en Español</button>
      <button onClick={() => handleButtonClick(myResumePDF2)}>Cv en Inglés</button>
    </div>
  );
};
