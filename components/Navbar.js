import React from 'react';
import { Link } from 'react-router-dom'





const showSideBar = ()=>{
    const sideBar = document.querySelector('.sideNavbar');
  
        if(sideBar.style.display === 'block'){
            sideBar.style.display = "none"
        }else{
            sideBar.style.display = "block"
        }
      
}

const Navbar = ()=>{



return(
    <div className="navbar">
        <nav className="navbar__nav">
            <div className="navbar__nav_home">
                <Link to="/" className="navbar__nav_home_link" ><h2 className="navbar__nav_home_link-title">Home</h2></Link>
            </div>
            <div className="navbar__nav_links">
                <ul className="navbar__nav_links_ul">
                <li className="navbar__nav_links_ul_li"><Link to="/contact" className="navbar__nav_links_ul_li-links">Contact us</Link></li>       
                <li className="navbar__nav_links_ul_li"><Link to="/aboutus" className="navbar__nav_links_ul_li-links">About Us</Link></li> 
                <li className="navbar__nav_links_ul_li"><Link to="/mailinglist" className="navbar__nav_links_ul_li-links">Get Offers</Link></li>
                <li className="navbar__nav_links_ul_li"><Link to="/menu" className="navbar__nav_links_ul_li-links">Menu</Link></li>
             </ul>
             <div className="navbar__nav_links__sidebar" onClick={ showSideBar }>
             <div className="navbar__nav_links__sidebar-bar1"></div>
             <div className="navbar__nav_links__sidebar-bar2"></div>
             <div className="navbar__nav_links__sidebar-bar3"></div>
             </div>
            </div>
        </nav>
        </div>
)
}

export default Navbar;