import React, { useState, useEffect } from 'react';

const TypingEffect = ({ textToType }) => {
    const [typedText, setTypedText] = useState('');
    const [hasTextLoaded, setHasTextLoaded] = useState(false);

    useEffect(() => {
        console.log(hasTextLoaded)
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < textToType.length) {
                setTypedText((prevText) => prevText + textToType.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
                setHasTextLoaded(true);
            }
        }, 50); // Ajusta la velocidad de escritura aquí (en milisegundos)

        return () => clearInterval(typingInterval); // Limpia el intervalo al desmontar el componente
    }, [textToType, hasTextLoaded]);

    return <h1>{typedText}</h1>;
};

export default TypingEffect;
