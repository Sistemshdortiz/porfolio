import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import "../style/DarkMode.css";
import { useState, useEffect } from "react"
import "../index.css"

const DarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Al cargar el componente, verificamos el tema actual en localStorage
    const currentTheme = localStorage.getItem("theme");

    // Si el tema actual es "dark", establecemos isDarkMode en true
    if (currentTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Cuando cambia el estado de isDarkMode, alternamos la clase del cuerpo del documento
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    // También puedes guardar el tema actual en localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    // Cambiamos el estado de isDarkMode al hacer clic en el interruptor
    setIsDarkMode(!isDarkMode);
  };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={isDarkMode}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
