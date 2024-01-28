import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import DarkMode from '../DarkMode';
// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css"

export const HeaderNav = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className='header navbar navbar-expand-lg justify-content-end'>
            <Container className='justify-content-end'>
                <button
                    className='navbar-toggler hambuguerButton'
                    type='button'
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <Navbar
                    expanded={expanded}
                    className={`collapse navbar-collapse ${expanded ? 'justify-content-start' : 'justify-content-end'}  ${expanded ? 'show' : ''} `}
                >
                    <Nav className={`mavbar-nav ${expanded ? 'flex-column' : ''}`}>
                        <li className='nav-item'>
                            <NavLink
                                to='/inicio'
                                className='nav-link nav-link-custom'
                                onClick={() => setExpanded(false)}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/portafolio'
                                className='nav-link nav-link-custom'
                                onClick={() => setExpanded(false)}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/servicios'
                                className='nav-link nav-link-custom'
                                onClick={() => setExpanded(false)}
                            >
                                Perfil
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/curriculum'
                                className='nav-link nav-link-custom'
                                onClick={() => setExpanded(false)}
                            >
                                Curriculum
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/contacto'
                                className='nav-link nav-link-custom'
                                onClick={() => setExpanded(false)}
                            >
                                Contacto
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <DarkMode />
                        </li>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    );
};