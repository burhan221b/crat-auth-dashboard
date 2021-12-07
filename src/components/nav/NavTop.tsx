import { useEffect } from "react"
import { Link } from "react-router-dom"
import { openSideNav } from "../../events"

const NavTop = () => {
    useEffect(() => {
        openSideNav()
    }, [])
    return (
        <nav id="NavTop">
            <div className="NavTop-div">
                <button className="mobile" id="NavTopOpenBtn">&#9776;</button>
                <Link to="/dashboard"><h1 style={{ display: "inline" }}>LOGO</h1></Link>
            </div>
            <div className="NavTop-div">

            </div>
        </nav>
    )
}

export default NavTop
