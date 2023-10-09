import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <div>
                    <img src={'/images/perfil_Img.png'} alt="Jorge" width={120} height={120} style={{ marginRight: '10px', borderRadius: '15px' }} />
                </div>
                <span>H</span>
                <h3>ernán Ortiz WEB</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink> {/* Con la desestructuración de objetos vemos si está activa la clase, se quede marcada en el menú, si no, no se aplica clase de css*/}
                    </li>
                    <li>
                        <NavLink to='/portafolio' className={({ isActive }) => isActive ? 'active' : ''}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/servicios' className={({ isActive }) => isActive ? 'active' : ''}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/curriculum' className={({ isActive }) => isActive ? 'active' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink>
                    </li>
                    <li>
                        <DarkMode></DarkMode>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
