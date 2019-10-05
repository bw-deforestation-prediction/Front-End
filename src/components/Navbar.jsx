import React, { useState } from 'react';
import useDarkMode from "../utils/hook";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    console.log(darkMode);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};
export default Navbar