import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic } from "../../events";
import Version from "../Version";

const NavSide = (props: any) => {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
        closeSideNav()
        removeOverlay()
    }, [])
    return (
        <nav id="NavSide">

            {/* Close Side Nav */}
            <div className="NavSide-div NavSide-div-close">
                <button id="NavSideCloseBtn">&#10094;</button>
            </div>

            {/* Links */}
            <div className="NavSide-div" id="NavSideMenus">
                <div className="NavSide-div-menu" id="NavSideMainMenu">
                    <ul className="NavSide-ul" >
                        <li><Link onClick={removeSideNavActive} to="/" >Home</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                        <li><Link onClick={() => openSideNavTopic("NavSideNotes")} to="/notes">Notes</Link></li>
                        <li><Link onClick={() => openSideNavTopic("NavSideDocs")} to="/docs">Docs</Link></li>
                        <li><button>Sign</button></li>
                    </ul>
                </div>


                <div className="NavSide-div-menu right-wing" id="NavSideNotes">
                    <ul className="NavSide-ul" >
                        <li><button onClick={() => closeSideNavTopic("NavSideNotes")}><h2>&#10094;</h2></button></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="NavSide-div-menu right-wing" id="NavSideDocs">
                    <ul className="NavSide-ul" >
                        <li><button onClick={() => closeSideNavTopic("NavSideDocs")}><h2>&#10094;</h2></button></li>
                        <li><Link onClick={removeSideNavActive} to="/" >1</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">2</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">3</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">4</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">5</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">6</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">7</Link></li>
                        <hr />
                        <h3>New Content</h3>
                        <li><Link onClick={removeSideNavActive} to="/about">8</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">9</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <hr />
                        <h3>New Content</h3>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                    </ul>
                </div>
            </div>



            {/* Version Number */}
            <div className="NavSide-div">
                <Version />
            </div>
            {/* </ul> */}
        </nav>
    )
}

const layerLinks = (LINK: string) => {

}

export default NavSide
