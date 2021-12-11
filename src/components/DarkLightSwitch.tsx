import React, { useEffect, useRef, useState } from 'react';
import { darkLightMode, createDarkLightMode } from '../events';


const DarkLightSwitch = () => {
    const [currentMode, setCurrentMode] = useState(false)

    useEffect(() => {
        const mode = localStorage.getItem('darkmode') || null;
        console.log("current color mode", mode)
        if (!mode) {
            createDarkLightMode();
            const c = darkLightMode();
            console.log("current mode", c)
            setCurrentMode(c)
        }
        else {
            setCurrentMode(mode === "dark" ? true : false)
            createDarkLightMode(mode);
            darkLightMode();
        }

    }, [])


    const checkMode = (e: any) => {
        localStorage.setItem("darkmode", e.target.checked ? "dark" : "light")
        setCurrentMode(e.target.checked);
    }

    return (
        <div className="toggle-container">
            <input checked={currentMode} onChange={(e) => checkMode(e)} type="checkbox" name="theme" id="switch" /><label htmlFor="switch" >Toggle</label>
        </div>
    )
}

export default DarkLightSwitch