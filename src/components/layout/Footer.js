import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    // <footer className='footer'>
    //   <p>Hernán David Ortiz Jinez WEB &copy;2024 Porfolio</p>
    // </footer>
    <footer className='footer'>
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Hernán David Ortiz J. | Porfolio</p>
        <div className="social-icons mt-3">
          <a href="https://www.linkedin.com/in/h%C3%A9rnan-david-ortiz-jinez-61aa52a5/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://github.com/Sistemshdortiz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" style={{ marginRight: '10px' }} />
          </a>
          {/* Agrega más iconos de redes sociales según tus necesidades */}
        </div>
      </div>
    </footer>
  )
}
