import { NavLink } from "react-router-dom"
import './styles/Navbar.css'
import Home from "./HomePage";
import React from "react";


const NavBar = () => {
    return (
            <nav className="navbar">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/camotracker">Camo Tracker</NavLink>
                <NavLink to = "/pathofexile">Path of Exile</NavLink>
            </nav>
    )
}

export default NavBar;