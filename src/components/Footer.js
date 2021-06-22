import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{

    return(
        <div className="footer">
            <footer className="footer__foot">
                <div className="footer__foot_links">
                  <div className="footer__foot_links_container">
                      <ul className="footer__foot_links_container-ul">
                         <li className="footer__foot_links_container_ul-li"><Link to="/" className="footer__foot_links_container_ul-li-link">Home</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/menu" className="footer__foot_links_container_ul-li-link">Menu</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/directions" className="footer__foot_links_container_ul-li-link">Directions</Link></li>  
                         <li className="footer__foot_links_container_ul-li"><Link to="/contact" className="footer__foot_links_container_ul-li-link">Contact Us</Link></li>  
                      </ul>
                  </div>
                </div>

                <div className="footer__foot_hours">
                     footer hours goes here 
                    </div>
                  
                  <div className="footer__foot_contact">
                      contact goes here 
                      </div>
            </footer>
            </div>
    )
}


export default Footer;


