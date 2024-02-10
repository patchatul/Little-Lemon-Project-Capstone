import logo from "../assets/littlelemonlogo.jpg";
import iconmenu from "../assets/iconmenu.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import About from "../pages/About";

function Nav() {
    const [menuOpen, setMenuOpen] =useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="nav">
            <img src={logo} alt="Little lemon logo" width="300px"/>
            <div className="iconmenu" onClick={toggleMenu}>
                <img src={iconmenu} alt='/' />
            </div>
            <ul className={`nav-links ${menuOpen ? 'open': ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;