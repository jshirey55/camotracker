import { NavLink } from "react-router-dom"
import './styles/Navbar.css'
import Home from "./HomePage";
import React from "react";


const NavBar = () => {
    return (
            <nav className="navbar">
                <NavLink className = "navlink" to = "/">Home</NavLink>
                <NavLink className = "navlink" to = "/camotracker">Camo Tracker</NavLink>
                <NavLink className = "navlink" to = "/pathofexile">Path of Exile</NavLink>
            </nav>
    )
}

export default NavBar;