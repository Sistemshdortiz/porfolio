import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

export const HeaderNav = () => {
    return (
        <header className='header navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <NavLink to='/' className='navbar-brand'>
                    <img src={'/images/LogoPorfolio.png'} alt="LogoPorfolio" width={120} height={120} style={{ marginRight: '10px', borderRadius: '27% 73% 70% 30% / 52% 43% 57% 48% ' }} />
                    <span>H</span>ernán Ortiz WEB
                </NavLink>

                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNav'>
                    <nav>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to='/inicio'  className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Inicio</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/portafolio'  className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Portfolio</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/servicios'  className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Perfil</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/curriculum'  className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Curriculum</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/contacto'  className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Contacto</NavLink>
                            </li>
                            <li className='nav-item'>
                                <DarkMode />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
