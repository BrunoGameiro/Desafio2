import React from "react";
import Link from "react-router-dom/es/Link";

const Nav = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link style={{marginRight: '20px'}} to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/app'}>Artigos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Nav;