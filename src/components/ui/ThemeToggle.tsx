import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { setTheme } from '../../events';


const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        setTheme();
    }, [])

    return (
        <div id="ThemeToggle" className="toggle-container">
            <input checked={theme} onChange={toggleTheme} type="checkbox" name="theme" id="switch" /><label htmlFor="switch" >Toggle</label>
        </div>
    )
}

export default ThemeToggle;