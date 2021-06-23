import React from 'react';
import { Link } from 'react-router-dom';



class Footer extends React.Component{
 state = {
     time:null,
     days:['Sunday' ,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
     currentDay:'' ,
     status:'Closed'
 }

//Function to display the day
showDate = async ()=>{
let catchDay = await new Date();
let dayCatched = await catchDay.getDay();
return this.state.days[dayCatched];
}


//this a function that returns a promise when the restaurant is open or closed
showTime = async ()=>{
let dateVariable = await new Date();
let timeCatched = await dateVariable.getHours();
return timeCatched;
}//end of the showtime function

showStatus = async (currentDay , time)=>{

    let response = '';

    if(currentDay === 'Tuesday' && time < 23){
       response = await  'Open, Closes at 10:00 pm'
    }if(currentDay === 'Wednesday' && time < 23){
       response = await 'Open, Closes at 10:00 pm';
    }if(currentDay ===  'Friday' && time < 24){
     response = await 'Open Closes at 11:00pm'
    }else{
         response = await 'Closed';
    }
}

componentDidMount(){

this.showTime().then((response) =>{ this.setState({time:response})}).catch((error)=>{ console.log(error)})
this.showDate().then((response)=>{ this.setState({currentDay:response})}).catch((error)=>{ console.log(error)})
}//end of the component did mount

componentDidUpdate(){
    //this.showStatus(this.state.currentDay , this.state.time).then((response) =>{this.setState({status:response})}).catch((error)=>{console.log(error)})
}
    render()
    {   
       
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
                     <div className="footer__foot_hours_container">
                         <div className="footer__foot_hours_container-time">
                             <h1>{this.state.status}</h1> 
                          </div>
                         </div>
                    </div>
                  
                  <div className="footer__foot_contact">
                      contact goes here 
                      </div>
            </footer>
            </div>
    )//end of the return
}//end of the render 
}//end of the class component 

export default Footer;


