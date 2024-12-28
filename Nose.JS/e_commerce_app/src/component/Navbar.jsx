import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBagShopping ,faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div >
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to="/home" className='logo'>Logo.</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <div className="navbar">
                                    <ul>
                                        <li className="active"><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                        <li><Link to="/contact"> Contacts</Link></li>
                                        <li><Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <Link to="#" className="search-switch"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"white", fontSize:"16px"}} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faHeart} style={{color:"white", fontSize:"16px"}} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faBagShopping} style={{color:"white", fontSize:"16px"}}/></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="canvas__open">&#8800;</div> */}
                </div>
            </header>
        </div>)


}

export default Navbar