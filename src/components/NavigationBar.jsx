import { Link, NavLink } from "react-router-dom";
import React from 'react';

function NavigationBar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/browse-characters" activeClassName="active">Browse Characters</NavLink>
            <NavLink to="/Comics" activeClassName="active">Comics</NavLink>
        </nav>
    )
}

export default NavigationBar;