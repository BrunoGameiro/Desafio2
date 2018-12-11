import React from "react";
import Link from "react-router-dom/es/Link";
import NavLink from "react-router-dom/es/NavLink";
import '../../css/css.css';

const Nav = () => (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
        <a className="nav-link"><NavLink active={'active'} to={'/'}>Challenge 2</NavLink></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link"><NavLink active={'active'} to={'/App'}>Articles</NavLink></a>
                </li>
                /*<li className="nav-item">
                    <a className="nav-link" href="#"><NavLink active={'active'} to={'/users'}>Users</NavLink></a>
                </li>*/
            </ul>
        </div>
    </div>
</nav>);

export default Nav;