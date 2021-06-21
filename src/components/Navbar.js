import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ()=>{

return(
    <div className="navbar">
        <nav className="navbar__nav">
            <div className="navbar__nav_home">
                <Link to="/" className="navbar__nav_home_link" ><h2 className="navbar__nav_home_link-title">Home</h2></Link>
            </div>
            <div className="navbar__nav_links">
                <ul className="navbar_nav_links_ul">
                <li className="navbar_nav_links_ul_li"> 
                    <Link to="/menu" className="navbar_nav_links_ul_li-links">Menu</Link>
                    <Link to="/menu" className="navbar_nav_links_ul_li-links">Mailing List</Link>
                    <Link to="/menu" className="navbar_nav_links_ul_li-links">Directions</Link>
                    <Link to="/menu" className="navbar_nav_links_ul_li-links">Contact Us</Link>
                </li>       
             </ul>
            </div>
        </nav>
        </div>
)
}

export default Navbar;