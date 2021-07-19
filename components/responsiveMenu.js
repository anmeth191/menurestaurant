import React , { useState} from  'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



const ResponsiveMenu = (props)=>{

const [list , setList] = useState({menu:['Home','Menu' , 'Get Offers' , 'About Us' , 'Contact Us'] , route:['/','menu' , 'mailinglist' ,'aboutus', 'contact']})
const [classname , setClassName] = useState('sideNavbar')


return ReactDOM.createPortal(
<div className="sideNavbar">
<div className="sideNavbar-container">
<div className="sideNavbar-container-elements">
    <ul className="sideNavbar-container-elements-ul">
        {
            list.menu.map(((element , index) =>{
                return(
                <li className="sideNavbar-container-elements-ul-li">
                    <Link to={`${list.route[index]}`}  className="sideNavbar-container-elements-ul-li-link">{ element }</Link>
                </li>
                    )//end of the return in the map
             }))//end of the map
        }
        </ul>
    </div>
</div>
</div> , document.querySelector('#sideBar'))

}//end of the function responsiveMenu

export default ResponsiveMenu;