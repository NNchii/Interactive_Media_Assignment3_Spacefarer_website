import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
    // Function to determine the class name based on isActive property
    const getActiveClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

    return (
        <nav className="navbar">
            <div className="nav-links">
                {/*Using navlink to get the active page to ensure the link is highlighted in the navbar.*/}
                <NavLink to="/Interactive_Media_Assignment3_Spacefarer_website" className={getActiveClass}>
                    Home
                </NavLink>
                <NavLink to="/design" className={getActiveClass}>
                    Design
                </NavLink>
            </div>
            <div className="logo"></div>
            <div className="nav-links">
                <NavLink to="/theory" className={getActiveClass}>
                    Theory
                </NavLink>
                <NavLink to="/netart" className={getActiveClass}>
                    Net Art
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
