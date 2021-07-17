import React from 'react';
import Geolocation from './Geolocation';
class ContactComponent extends React.Component{


render(){

    return(
     <div className="contactComponent">
     <div className="contactComponent__container">

     <div className="contactComponent__container__form">
     <div className="contactComponent__container__form--list">
                                <ul className="contactComponent__container__form--list--ul">
                                <li className="contactComponent__container__form--list--ul--li"> 127 My Address Avenue</li>
                                <li className="contactComponent__container__form--list--ul--li"> Code city, PA 1234</li>
                                <li className="contactComponent__container__form--list--ul--li"> Phone: 1 123-456-789</li>
                                <li className="contactComponent__container__form--list--ul--li"> Email: restaurant@food.com</li>
                                 </ul>
        </div>

     <form className="contactComponent__container__form-dataForm">
     <div className="contactComponent__container__form-dataForm-input">
                   <label className="labelStyle" for="username">Name</label>
                   <input className="inputStyle" type="text" name="username" id="username" required/>
    </div>

     <div className="contactComponent__container__form-dataForm-input">
                   <label className="labelStyle" for="email">Email Address</label>
                   <input className="inputStyle" type="email" name="email" id="email" required/>
    </div>

    <div className="contactComponent__container__form-dataForm-input">
                   <label className="labelStyle" for="phone">Phone</label>
                   <input className="inputStyle" type="text" name="phone" id="phone" required/>
    </div>

    <div className="contactComponent__container__form-dataForm-input">
                   <label className="labelStyle" for="message">Message</label>
                   <input className="inputStyle" type="textarea" name="message" id="message" required/>
    </div>
 
         </form>
         </div>
     
         <div className="contactComponent__container__maps">
         <div className="contactComponent__container__maps-map">
         <h1 className="contactComponent__container__maps-map-title">Google Geolocation API Code goes here</h1>
         <Geolocation/>
         </div>
         <div className="contactComponent__container__maps-schedule">
          <h2 className="contactComponent__container__maps-schedule-days">Sunday - Thursday</h2>
          <span className="contactComponent__container__maps-schedule-times"> 10:00AM - 10:00PM</span>
        </div>

        <div className="contactComponent__container__maps-schedule">
        <h2 className="contactComponent__container__maps-schedule-days">Friday - Saturday</h2>
        <span className="contactComponent__container__maps-schedule-times"> 10:00AM - 11:00PM</span>
         </div>
         </div>
         </div>    
         </div>
    )//end of the return
}//end of the render 
}//end of the class ContactComponent


export default ContactComponent;