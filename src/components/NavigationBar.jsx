import { Link, NavLink } from "react-router-dom";
import React from 'react';

function NavigationBar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/" activeClassName="active">HomePage</NavLink>
            <NavLink to="/products-page" activeClassName="active">Products Page</NavLink>
        </nav>
    )
}

export default NavigationBar;