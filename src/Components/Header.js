import React from "react";
import {Link} from "react-router-dom";

function Header() {

    return (
        <nav className={"navbar"}>
            <div className={"navbar-brand"}>
                <Link to={"/"}>
                    <h2 className={"navbar-item"}>Home</h2>
                </Link>
            </div>
            <div className={"navbar-menu"}>
                <Link to={"/about"}>
                    <h2 className={"navbar-item"}>About</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Header