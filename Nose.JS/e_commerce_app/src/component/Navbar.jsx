import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBagShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../component/img/brandLogo.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="header1">
                <div className="container1">
                    <div className="header__logo1">
                        <Link to="/home" className="logo1" ><img src={logo} alt="" width={60} /></Link>
                    </div>
                    <div className="canvas__open1" onClick={toggleMenu}>&#9776;</div>
                    <nav className={`header__menu1 ${menuOpen ? 'mobile-menu1' : ''}`}>
                        <ul>
                            <li className="active1"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>
                            <li><Link to="/login" className='login1'><FontAwesomeIcon icon={faUser} /> Login</Link></li>
                        </ul>
                    </nav>
                    <div className="header__nav__option1">
                        <Link to="#" className="search-switch1"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: "16px" }} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faHeart} style={{ color: "white", fontSize: "16px" }} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faBagShopping} style={{ color: "white", fontSize: "16px" }} /></Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
