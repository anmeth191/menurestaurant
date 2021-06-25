 import React from 'react';
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';

 import { Link } from 'react-router-dom';
 
 const IndexApp = () => {

    return(
     
         <div className="index">
         <div className="index__showcase">
            <div className="index__showcase__container">
             <div className="index__showcase__container--content">
               <div className="index__showcase__container--content--title">
                 <h1 className="index__showcase__container--content--title-h1">Restaurant's</h1>
                 <h3 className="index__showcase__container--content--title-h2">ITALIAN RESTAURANT AND PIZZERIA</h3>
               </div>

               <div className="index__showcase__container--content--buttons">
                 <div className="index__showcase__container--content--buttons-container"> 
                 <Link to="/menu" className="index__showcase__container--content--buttons-container-button">Menu</Link>
                 <Link to="/directions "className="index__showcase__container--content--buttons-container-button">Visit Us</Link>
                 </div>
               </div>
  
             </div>
            </div>
            </div>
        </div>
  
 
  )//end of the return

}//end of the class Component

export default IndexApp;